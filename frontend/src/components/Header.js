import React from "react";

import logo from "../images/header__logo_light.svg";

function Header({ children, isWrappable }) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  function handleOpenMenu() {
    setIsMenuOpened((state) => !state);
  }

  return (
    <header
      className={
        "header content__element content__element_type_header" +
        (isWrappable ? " header_wrappable" : "")
      }
    >
      <img
        src={logo}
        alt="Сервис Место-Россия. Логотип"
        className="header__logo"
      />

      {isWrappable && (
        <button
          type="button"
          className={
            "header__menu-button" +
            (isMenuOpened ? " header__menu-button_opened" : "")
          }
          aria-label="Открыть меню"
          onClick={handleOpenMenu}
        ></button>
      )}

      {children && (
        <nav
          className={
            "header__menu" + (isMenuOpened ? " header__menu_opened" : "")
          }
        >
          <ul className="header__menu-list">
            {(children.length > 1 ? children : [children]).map((item, pos) => (
              <li className="header__menu-item" key={pos}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
