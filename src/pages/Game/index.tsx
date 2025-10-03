import { useMatch } from '../../hooks';
import deck from '../../assets/deck';
import { Card } from '../../components';
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
    start(deck, ['Bruno', 'IA']);
  };

  const handleChooseAttr = (attr: CardAttrKey) => {
    handleTurn(attr);
  };

  return (
    <div className="game-board">
      <button className="start" onClick={handleStartMatch}>
        {!gameState ? 'Iniciar Partida' : 'Nova Partida'}
      </button>

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
                <Card
                  card={playerHand[0]}
                  isInGameMode={true}
                  onChooseAttr={handleChooseAttr}
                />
              )}
              {aiHand[0] && (
                <Card
                  card={aiHand[0]}
                  flipped={!isAICardRevealed}
                  isInGameMode={true}
                />
              )}
            </>
          )}
        </div>
      )}

      {matchWinner === null && (
        <div className="game-status">
          <p className="turn">{turn > 0 ? turn : ''}</p>
          <p className="log">{logs[0]}</p>
        </div>
      )}
    </div>
  );
}
