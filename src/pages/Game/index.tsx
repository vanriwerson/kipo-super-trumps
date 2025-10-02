import { useState } from 'react';
import { useMatch } from '../../hooks';
import deck from '../../assets/deck';
import { Card } from '../../components';
import './style.css';
import type { CardAttrKey } from '../../interfaces';

export default function Game() {
  const [aiCardFlipped, setAiCardFlipped] = useState<boolean>(true);
  const { turn, playerHand, aiHand, start, handleTurn, gameState, logs } =
    useMatch();

  const handleStartMatch = () => {
    start(deck);
    setAiCardFlipped(true); // sempre reseta ao começar uma nova partida
  };

  const handleChooseAttr = (attr: CardAttrKey) => {
    handleTurn(attr, () => {
      // este callback só é disparado quando o log "escolheu atributo" já foi exibido
      setAiCardFlipped(false);
    });
  };

  return (
    <div className="game-board">
      <button className="start" onClick={handleStartMatch}>
        {!gameState ? 'Iniciar Partida' : 'Nova Partida'}
      </button>

      {gameState && (
        <>
          <div className="in-game-cards">
            <Card
              card={playerHand[0]}
              isInGameMode={true}
              onChooseAttr={handleChooseAttr}
            />
            <Card
              card={aiHand[0]}
              flipped={aiCardFlipped}
              isInGameMode={true}
            />
          </div>

          <div className="game-status">
            <p className="turn">{turn > 0 ? turn : ''}</p>
            <p className="log">{logs[0]}</p>
          </div>
        </>
      )}
    </div>
  );
}
