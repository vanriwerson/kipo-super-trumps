import { gameRulesMap } from '../../helpers';
import './style.css';

export default function GameRules() {
  return (
    <div className="rules-board">
      <h3>Pra refrescar sua memória, aqui estão as regras do jogo:</h3>

      <ul>
        {gameRulesMap.map((rule, i) => {
          return (
            <li key={`rule ${i}`} className="rule">
              <strong>*</strong>
              {` ${rule}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
