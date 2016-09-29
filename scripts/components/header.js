import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <header className="c-header l-header l-main-header">
    <div className="row l-header__row">
      <div className="col-xs-1 l-header__col">
        <img src="/pictures/logo_header.png" alt="" className="c-header__logo" />
      </div>
      <div className="col-xs-3 l-header__col">
        <div className="l-header__logo-name">
          <p className="l-header__logo-name__content">
            <b>Daniel Caldeira</b>
            <br />
            <span>designer gráfico</span>
          </p>
        </div>
      </div>
      <div className="col-xs-6 col-xs-offset-2 l-header__col pull-right">
        <div className="l-header__menu">
          <div className="row l-header__row c-header__menu c-header__menu--languages">
            <div className="col-xs-4 col-xs-offset-8 l-header__col">
              <nav className="c-header__menu">
                <div className="c-header__menu-list menu-list row">
                  <div className="col-xs-6"><a className="c-header__menu-item menu-list__item has-separator">PT</a></div>
                  <div className="col-xs-6"><a className="c-header__menu-item menu-list__item">EN</a></div>
                </div>
              </nav>
            </div>
          </div>
          <div className="row l-header__row c-header__menu c-header__menu--pages">
              <nav className="c-header__menu">
                  <div className="col-xs-4">
                    <Link to="/" className="c-header__menu-item menu-list__item">Projetos</Link>
                  </div>
                  <div className="col-xs-4">
                    <Link to="/about" className="c-header__menu-item menu-list__item">Sobre Mim</Link>
                  </div>
                  <div className="col-xs-4">
                    <Link to="/contacts" className="c-header__menu-item menu-list__item">Contactos</Link>
                  </div>
              </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
