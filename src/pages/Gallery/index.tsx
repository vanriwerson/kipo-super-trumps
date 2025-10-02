import deck from '../../assets/deck';
import Card from '../../components/Card';
import './style.css';

export default function Gallery() {
  return (
    <div className="cards-wrapper">
      {deck.map((card) => (
        <Card key={card.id} card={card} isInGameMode={false} />
      ))}
    </div>
  );
}
