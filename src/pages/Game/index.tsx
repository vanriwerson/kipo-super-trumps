import { useMatch } from '../../hooks';
import deck from '../../assets/deck';
import { Card, HandDisplay } from '../../components';
import type { CardAttrKey } from '../../interfaces';
import './style.css';
import { useState } from 'react';

export default function Game() {
  const {
    turn,
    playerHand,
    aiHand,
    start,
    handleTurn,
    gameState,
    logs,
    isAICardRevealed,
    matchWinner,
  } = useMatch();

  const [playerName, setPlayerName] = useState('');

  const handleStartMatch = () => {
    start(deck, [playerName, 'IA']);
  };

  const handleChooseAttr = (attr: CardAttrKey) => {
    handleTurn(attr);
  };

  return (
    <div className="page-container">
      <div className="game-board-header">
        {gameState != null && matchWinner === null && (
          <div className="game-status">
            {turn > 0 && (
              <>
                <span className="turn">{turn < 10 ? `0${turn}` : turn}</span>
                <span className="log">{logs[0]}</span>
              </>
            )}
          </div>
        )}
      </div>

      {gameState && (
        <div className="in-game-cards">
          {matchWinner != null ? (
            <>
              <div className="winner">
                <h2>{`${matchWinner} venceu a partida!`}</h2>
              </div>
            </>
          ) : (
            <>
              {playerHand[0] && (
                <div className="hand-wrapper">
                  <Card
                    card={playerHand[0]}
                    galleryMode={false}
                    onChooseAttr={handleChooseAttr}
                  />
                  <HandDisplay count={playerHand.length} label={playerName} />
                </div>
              )}
              {aiHand[0] && (
                <div className="hand-wrapper">
                  <Card
                    card={aiHand[0]}
                    flipped={!isAICardRevealed}
                    galleryMode={false}
                  />
                  <HandDisplay count={aiHand.length} label="IA" />
                </div>
              )}
            </>
          )}
        </div>
      )}

      <div
        className={`game-board-footer ${
          gameState != null && matchWinner === null ? 'hidden' : ''
        }`}
      >
        <input
          className="player-name"
          type="text"
          name="player-name"
          id="player-name"
          maxLength={8}
          placeholder="Digite seu nome..."
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
        />

        <button
          className={`start ${
            gameState != null && matchWinner === null ? 'hidden' : ''
          }`}
          disabled={playerName.length < 3}
          onClick={handleStartMatch}
        >
          {!gameState ? 'Iniciar Partida' : 'Nova Partida'}
        </button>
      </div>
    </div>
  );
}
