import deck from '../../assets/deck';
import Card from '../../components/Card';

export default function Gallery() {
  return (
    <div className="page-container">
      {deck.map((card) => (
        <Card key={card.id} card={card} galleryMode />
      ))}
    </div>
  );
}
