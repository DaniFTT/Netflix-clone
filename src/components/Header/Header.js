import React from "react";
import "./Header.css";
import { ImSearch } from 'react-icons/im';
import { AiOutlineGift } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';


function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img src="https://imgur.com/vCUNHOL.png" alt="Netflix" />
        </a>
      </div>
      <div className="header-nav">
        <a href="">Início</a>
        <a href="">Séries</a>
        <a href="">Filmes</a>
        <a href="">Bombando</a>
        <a href="">Minha Lista</a>
      </div>
      <div className="header-search-icon">
        <a href="#"><ImSearch className="icon"/></a>      
      </div>
      <div className="header-gift-icon">
        <a href="#"><AiOutlineGift className="icon"/></a>       
      </div>
      <div className="header-alert-icon">
        <a href="#"><IoMdNotifications className="icon"/></a>   
      </div>
      <div className="header-user">
        <a href="/">
          <img src="https://i.imgur.com/Abu6vGm.png" alt="Usuário"/>
        </a>
      </div>
    </header>
  );
}

export default Header;
