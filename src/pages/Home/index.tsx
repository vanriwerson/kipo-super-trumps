import { NavLink } from 'react-router-dom';
import { GameRules } from '../../components';
import './style.css';

export default function Home() {
  return (
    <div className="page-container">
      <div className="presentation">
        <p>
          Prepare-se para uma verdadeira viagem no tempo! O lendário{' '}
          <strong>Super Trunfo</strong> está de volta com um visual renovado e
          personagens incríveis. Reviva a emoção das cartas, enfrente a IA e
          reviva essa experiência dos anos 80 — o trunfo está em suas mãos!
        </p>
      </div>

      <GameRules />

      <NavLink to="/game" className="nav">
        Bora Jogar!
      </NavLink>
    </div>
  );
}
