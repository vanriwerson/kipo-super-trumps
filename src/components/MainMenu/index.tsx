import { NavLink } from 'react-router-dom';
import './style.css';

export default function MainMenu() {
  return (
    <nav className="main-menu">
      <h1 className="title">Kipo Super Trunfo</h1>

      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Início
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Galeria
      </NavLink>
      <NavLink
        to="/game"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Jogo
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Configurações
      </NavLink>
    </nav>
  );
}
