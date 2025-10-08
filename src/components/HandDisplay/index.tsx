import './style.css';
import HandCards from '../../assets/handCards.png';

interface HandDisplayProps {
  count: number;
  label?: string;
}

export default function HandDisplay({ count, label }: HandDisplayProps) {
  return (
    <div className="hand-display">
      <img src={HandCards} alt="" className="hand-icon" />
      <span className="badge">{count}</span>
      {label && <p className="hand-label">{label}</p>}
    </div>
  );
}
