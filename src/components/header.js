import React from "react";
// import Icon from "../assets/icon-indesign.svg";
// import Logo from "../assets/ted-logo.png";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' alt='ted-logo'></img>
        <div className='header__button__wrapper'>
          <img className='header__icon'></img>
          <img className='header__icon'></img>
        </div>
      </div>
    </header>
  );
}
