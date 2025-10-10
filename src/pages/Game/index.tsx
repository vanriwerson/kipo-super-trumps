import { useMatch } from '../../hooks';
import deck from '../../assets/deck';
import { Card, HandDisplay } from '../../components';
import './style.css';
import type { CardAttrKey } from '../../interfaces';

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

  const handleStartMatch = () => {
    start(deck, ['Jogador', 'IA']);
  };

  const handleChooseAttr = (attr: CardAttrKey) => {
    handleTurn(attr);
  };

  return (
    <div className="game-board">
      <div className="game-board-header">
        {gameState != null && matchWinner === null && (
          <div className="game-status">
            <span className="turn">
              {turn > 0 ? (turn < 10 ? `0${turn}` : turn) : ''}
            </span>
            <span className="log">{logs[0]}</span>
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
                  <HandDisplay count={playerHand.length} label="Jogador" />
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

      <button className="start" onClick={handleStartMatch}>
        {!gameState ? 'Iniciar Partida' : 'Nova Partida'}
      </button>
    </div>
  );
}
