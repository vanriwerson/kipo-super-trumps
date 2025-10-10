import { useCallback, useEffect, useState } from 'react';
import type { Card, CardAttrKey, GameState } from '../interfaces';
import {
  startMatch,
  AIChooseAttr,
  playTurn,
  getCurrentTurnCards,
  checkMatchWinner,
} from '../services';
import { useLog } from './useLog';
import { AttrDictionary } from '../helpers';

export function useMatch() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [matchWinner, setMatchWinner] = useState<string | null>(null);

  const [lastAITurn, setLastAITurn] = useState<number>(-1);
  const [isAICardRevealed, setIsAICardRevealed] = useState(false);
  const { logs, logger, resetLogs } = useLog();

  const LOG_DISPLAY_DURATION =
    gameState && gameState.choosingPlayer === 0 ? 1000 : 1500;

  const start = useCallback(
    (deck: Card[], players: string[]) => {
      const initialState = startMatch(deck, players);
      logger('Partida iniciada!');

      setTimeout(() => {
        const chooser = initialState.players[initialState.choosingPlayer];
        logger(`${chooser.name} escolhendo atributo`);
      }, LOG_DISPLAY_DURATION);

      setMatchWinner(null);
      resetLogs();
      setGameState(initialState);
      setLastAITurn(-1);
      setIsAICardRevealed(false);
    },
    [LOG_DISPLAY_DURATION, logger]
  );

  const handleTurn = useCallback(
    async (chosen: CardAttrKey) => {
      if (!gameState) return;

      const chooser = gameState.players[gameState.choosingPlayer];
      logger(`${chooser.name} escolheu ${AttrDictionary(chosen)}`);

      setIsAICardRevealed(true);
      await new Promise((resolve) => setTimeout(resolve, LOG_DISPLAY_DURATION));

      const solvedTurn = playTurn(gameState, chosen);

      // logs
      const [playerCard, aiCard] = getCurrentTurnCards(gameState);
      let delay = LOG_DISPLAY_DURATION;

      if (playerCard?.isTrumpCard || aiCard?.isTrumpCard) {
        setTimeout(() => logger('SuperTrunfo em jogo!'), delay);
        delay += LOG_DISPLAY_DURATION;
      }

      const prevHands = gameState.players.map((p) => p.hand.length);
      const newHands = solvedTurn.players.map((p) => p.hand.length);
      const winnerIndex = newHands.findIndex((len, i) => len > prevHands[i]);

      setTimeout(() => {
        if (winnerIndex !== -1)
          logger(`${solvedTurn.players[winnerIndex].name} venceu esse turno!`);
        else logger('Esse turno empatou!');
      }, delay);

      const winner = checkMatchWinner(solvedTurn);
      if (winner != null) {
        setMatchWinner(winner.name);
        return;
      }

      // inicia próximo turno
      setTimeout(() => {
        const chooser = solvedTurn.players[solvedTurn.choosingPlayer];
        logger(`${chooser.name} escolhendo atributo`);
        setGameState(solvedTurn);
        setIsAICardRevealed(false);
      }, delay + LOG_DISPLAY_DURATION);

      return solvedTurn;
    },
    [LOG_DISPLAY_DURATION, gameState, logger]
  );

  // 🔹 IA joga automaticamente
  useEffect(() => {
    if (!gameState) return;

    const chooser = gameState.players[gameState.choosingPlayer];

    if (chooser.name === 'IA' && gameState.turnsCount > lastAITurn) {
      const aiCard = gameState.players[1].hand[0];
      const chosen = AIChooseAttr(aiCard);

      const timer = setTimeout(() => {
        handleTurn(chosen);
        setLastAITurn(gameState.turnsCount);
      }, LOG_DISPLAY_DURATION);

      return () => clearTimeout(timer);
    }
  }, [gameState, lastAITurn, handleTurn, LOG_DISPLAY_DURATION]);

  return {
    turn: gameState?.turnsCount ?? 0,
    choosingAttr: gameState?.players[gameState?.choosingPlayer],
    stack: gameState?.stack ?? ([] as Card[]),
    playerHand: gameState?.players[0].hand ?? ([] as Card[]),
    aiHand: gameState?.players[1].hand ?? ([] as Card[]),
    logs,
    isAICardRevealed,

    handleTurn,
    logger,
    start,
    gameState,
    matchWinner,
  } as const;
}
