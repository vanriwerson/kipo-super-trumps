import { useCallback, useState } from 'react';
import type { Card, CardAttrKey, GameState } from '../interfaces';
import {
  startMatch,
  chooseAttr,
  AIChooseAttr,
  playTurn,
  getCurrentTurnCards,
} from '../services';
import { useLog } from './useLog';

export function useMatch() {
  const LOG_DISPLAY_DURATION = 1000;
  const [gameState, setGameState] = useState<GameState | null>(null);
  const { logs, logger } = useLog();

  const start = useCallback(
    (deck: Card[]) => {
      const initialState = startMatch(deck, ['Bruno', 'AI']);
      logger('Partida iniciada!');

      setTimeout(() => {
        const chooser = initialState.players[initialState.choosingPlayer];
        logger(`${chooser.name} escolhendo atributo`);
      }, LOG_DISPLAY_DURATION);
      setGameState(initialState);
    },
    [logger]
  );

  const handleTurn = useCallback(
    async (
      attr: CardAttrKey,
      onRevealAICard?: () => void,
      onNewTurn?: () => void
    ) => {
      if (!gameState) return;

      const choosingPlayer = gameState.players[gameState.choosingPlayer];

      // 1. Escolha do atributo (log imediato)
      let chosen: CardAttrKey;
      if (choosingPlayer.name === 'ai') {
        const aiCard = gameState.players[1].hand[0];
        chosen = AIChooseAttr(aiCard);
      } else {
        chosen = chooseAttr(attr);
      }
      logger(`${choosingPlayer.name} escolheu ${chosen}`);

      // 2. Pausa antes de revelar carta da IA
      await new Promise((resolve) => setTimeout(resolve, LOG_DISPLAY_DURATION));
      if (onRevealAICard) onRevealAICard();

      // 3. Pega cartas atuais e resolve turno
      const newState = getCurrentTurnCards(gameState);
      const solvedTurn = playTurn(newState, chosen);

      // 4. Logs pós-turno
      const [playerCard, aiCard] = newState.currentTurnCards;
      let delay = LOG_DISPLAY_DURATION;

      if (playerCard.isTrumpCard || aiCard.isTrumpCard) {
        setTimeout(() => logger('SuperTrunfo em jogo!'), delay);
        delay += LOG_DISPLAY_DURATION;
      }

      const prevHands = gameState.players.map((p) => p.hand.length);
      const newHands = solvedTurn.players.map((p) => p.hand.length);
      const winnerIndex = newHands.findIndex((len, i) => len > prevHands[i]);

      setTimeout(() => {
        if (winnerIndex !== -1) {
          logger(`${solvedTurn.players[winnerIndex].name} venceu esse turno!`);
        } else {
          logger('Esse turno empatou!');
        }
      }, delay);

      // 5. Inicia novo turno só depois do log final
      setTimeout(() => {
        const chooser = solvedTurn.players[solvedTurn.choosingPlayer];
        logger(`${chooser.name} escolhendo atributo`);
        if (onNewTurn) onNewTurn(); // esconde carta da IA
        setGameState(solvedTurn);
      }, delay + LOG_DISPLAY_DURATION);

      console.log(
        'Mãos após turno:',
        solvedTurn.players.map((p) => p.hand.map((c) => c.id))
      );
      return solvedTurn;
    },
    [gameState, logger]
  );

  return {
    turn: gameState?.turnsCount ?? 0,
    choosingAttr: gameState?.players[gameState?.choosingPlayer],
    stack: gameState?.stack ?? ([] as Card[]),
    playerHand: gameState?.players[0].hand ?? ([] as Card[]),
    aiHand: gameState?.players[1].hand ?? ([] as Card[]),
    logs,

    handleTurn,
    logger,
    start,

    gameState,
  } as const;
}
