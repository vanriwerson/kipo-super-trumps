import type { Card as CardType } from '../../interfaces';
import type { AttributeKey } from '../../services/turnServices/chooseAttr';
import './style.css';

interface CardProps {
  card: CardType;
  galleryMode: boolean;
  flipped?: boolean;
  onChooseAttr?: (attr: AttributeKey) => void;
}

export default function Card({
  card,
  galleryMode = true,
  flipped: flippedProp = false,
  onChooseAttr,
}: CardProps) {
  return (
    <div className="card-container">
      <div className={`card ${flippedProp ? 'flipped' : ''}`}>
        {/* Frente */}
        <div className="card-front">
          <div className="title-wrappper">
            <h4>{card.name}</h4>
            {card.isTrumpCard ? (
              <span className="trump">TRUNFO</span>
            ) : (
              <span className="id">{card.id}</span>
            )}
          </div>
          <img src={card.imgLink} alt={card.name} className="card-img" />

          <div className="attributes-wrapper">
            <button
              className="attribute"
              onClick={() => onChooseAttr?.('strength')}
              disabled={galleryMode}
            >
              <span className="label">Força</span>
              <span className="value">{card.strength}</span>
            </button>
            <button
              className="attribute"
              onClick={() => onChooseAttr?.('agility')}
              disabled={galleryMode}
            >
              <span className="label">Agilidade</span>
              <span className="value">{card.agility}</span>
            </button>
            <button
              className="attribute"
              onClick={() => onChooseAttr?.('intelligence')}
              disabled={galleryMode}
            >
              <span className="label">Inteligência</span>
              <span className="value">{card.intelligence}</span>
            </button>
            <button
              className="attribute"
              onClick={() => onChooseAttr?.('charisma')}
              disabled={galleryMode}
            >
              <span className="label">Carisma</span>
              <span className="value">{card.charisma}</span>
            </button>
          </div>
        </div>

        {/* Verso */}
        <div className="card-back"></div>
      </div>
    </div>
  );
}
