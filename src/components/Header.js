import React from "react";
import headerLogo from "../images/header-logo.png";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Надпись на логотипе Mesto Russia"
      />
    </header>
  );
}

export default Header;
