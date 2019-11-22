import React from "react";
import Icon from "../assets/icon_search.png";
import Icon2 from "../assets/icon_settings.png";
import Logo from "../assets/icon_ted-logo.png";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={Logo} alt='ted-logo'></img>
        <div className='header__button__wrapper'>
          <img className='header__icon' src={Icon} alt='icon'></img>
          <img className='header__icon' src={Icon2} alt='icon'></img>
        </div>
      </div>
    </header>
  );
}
