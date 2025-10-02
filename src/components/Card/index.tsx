import { useState } from 'react';
import type { Card as CardType } from '../../interfaces';
import type { AttributeKey } from '../../services/turnServices/chooseAttr';
import './style.css';

interface CardProps {
  card: CardType;
  isInGameMode: boolean;
  flipped?: boolean;
  onChooseAttr?: (attr: AttributeKey) => void;
}

export default function Card({
  card,
  isInGameMode,
  flipped: flippedProp = false,
  onChooseAttr,
}: CardProps) {
  const [galleryFlipped, setGalleryFlipped] = useState(false);
  const isFlipped = isInGameMode ? flippedProp : galleryFlipped;

  return (
    <div
      className="card-container"
      onClick={
        isInGameMode ? undefined : () => setGalleryFlipped((prev) => !prev)
      }
    >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        {/* Frente */}
        <div className="card-front">
          <div className="title-wrappper">
            <h4>{card.name}</h4>
            <span className="id">{card.id}</span>
          </div>
          <img src={card.imgLink} alt={card.name} className="card-img" />

          <div className="attributes-wrapper">
            {isInGameMode ? (
              <>
                <button
                  className="attribute"
                  onClick={() => onChooseAttr?.('strength')}
                >
                  Força: {card.strength}
                </button>
                <button
                  className="attribute"
                  onClick={() => onChooseAttr?.('agility')}
                >
                  Agilidade: {card.agility}
                </button>
                <button
                  className="attribute"
                  onClick={() => onChooseAttr?.('intelligence')}
                >
                  Inteligência: {card.intelligence}
                </button>
                <button
                  className="attribute"
                  onClick={() => onChooseAttr?.('charisma')}
                >
                  Carisma: {card.charisma}
                </button>
              </>
            ) : (
              <>
                <p className="attribute">Força: {card.strength}</p>
                <p className="attribute">Agilidade: {card.agility}</p>
                <p className="attribute">Inteligência: {card.intelligence}</p>
                <p className="attribute">Carisma: {card.charisma}</p>
              </>
            )}
          </div>

          {card.isTrumpCard && (
            <div className="trump">
              <span>TRUNFO</span>
            </div>
          )}
        </div>

        {/* Verso */}
        <div className="card-back">
          <span></span>
        </div>
      </div>
    </div>
  );
}
