import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../context/AuthContext.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="LeftSide">
          <div className="logo-container">
            <span className="logo">🌿 FitRecipe</span>
          </div>

          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Главная
          </Link>
          <div className="dropdown">
            <span className="nav-link pages-link">
              Страницы <span className="dot">•</span>
            </span>
            <div className="dropdown-content">
              <Link to="/filters" className="dropdown-item">
                Фильтры
              </Link>
              <Link to="/recipes" className="dropdown-item">
                Рецепты
              </Link>
            </div>
          </div>

          {user && (
            <Link to="/profile" className="nav-link">
              Профиль
            </Link>
          )}
        </nav>

        <div className="dropdown">
          <button className="goal-button">Я хочу...</button>
          <div className="dropdown-content goals-dropdown">
            <Link to="/lose-weight" className="dropdown-item">
              Похудеть
            </Link>
            <Link to="/lose-weight" className="dropdown-item">
              Набрать массу
            </Link>
            <Link to="/lose-weight" className="dropdown-item">
              Поддерживать форму
            </Link>
            <Link to="/lose-weight" className="dropdown-item">
              Веган / Вегетарианец
            </Link>
            <Link to="/lose-weight" className="dropdown-item">
              Безглютеновая диета
            </Link>
          </div>
        </div>
      </header>

      <aside className={`side-nav ${menuOpen ? "side-nav-open" : ""}`}>
        <button
          className="close-button"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav className="side-nav-links">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Главная
          </Link>
          <div className="side-nav-dropdown">
            <button className="side-nav-goal-button" onClick={closeMenu}>
              Страницы
            </button>
            <div className="side-nav-dropdown-content">
              <Link
                to="/filters"
                className="side-nav-dropdown-item"
                onClick={closeMenu}
              >
                Фильтры
              </Link>
              <Link
                to="/recipes"
                className="side-nav-dropdown-item"
                onClick={closeMenu}
              >
                Рецепты
              </Link>
            </div>
          </div>
          {user && (
            <Link to="/profile" className="nav-link" onClick={closeMenu}>
              Профиль
            </Link>
          )}
          <div className="side-nav-dropdown">
            <button className="side-nav-goal-button">Я хочу...</button>
            <div className="side-nav-dropdown-content">
              <Link
                to="/lose-weight"
                className="dropdown-item"
                onClick={closeMenu}
              >
                Похудеть
              </Link>
              <Link
                to="/lose-weight"
                className="side-nav-dropdown-item"
                onClick={closeMenu}
              >
                Набрать массу
              </Link>
              <Link
                to="/lose-weight"
                className="side-nav-dropdown-item"
                onClick={closeMenu}
              >
                Поддерживать форму
              </Link>
              <Link
                to="/lose-weight"
                className="side-nav-dropdown-item"
                onClick={closeMenu}
              >
                Веган / Вегетарианец
              </Link>
              <Link
                to="/lose-weight"
                className="side-nav-dropdown-item"
                onClick={closeMenu}
              >
                Безглютеновая диета
              </Link>
            </div>
          </div>
        </nav>
      </aside>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
