import React from "react";
import LibraryIcon from "../assets/icon_library.png";
import MessageIcon from "../assets/icon_messages.png";
import AccountIcon from "../assets/icon_account.png";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <img className='footer__icon' src={LibraryIcon} alt='footer icon'></img>
        <br></br>
        <img className='footer__icon' src={MessageIcon} alt='footer icon'></img>
        <br></br>
        <img className='footer__icon' src={AccountIcon} alt='footer icon'></img>
      </div>
    </footer>
  );
}
