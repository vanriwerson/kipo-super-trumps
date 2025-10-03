import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import favicon from '../../assets/favicon.png';
import './style.css';

export default function MainMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-menu">
      <h1 className="title">Kipo Super Trunfo</h1>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        <img src={favicon} alt="Menu" className="menu-icon" />
      </button>

      <div className={`menu-links ${open ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>
          Início
        </NavLink>
        <NavLink to="/gallery" onClick={() => setOpen(false)}>
          Galeria
        </NavLink>
        <NavLink to="/game" onClick={() => setOpen(false)}>
          Jogo
        </NavLink>
        <NavLink to="/settings" onClick={() => setOpen(false)}>
          Configurações
        </NavLink>
      </div>
    </nav>
  );
}
