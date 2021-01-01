import "./Footer.css";
import React from "react";
import { ImFacebook2 } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImYoutube } from 'react-icons/im';

function Index() {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="#"><ImFacebook2 className="icon" /></a>
        <a href="#"><ImInstagram className="icon" /></a>
        <a href="#"><ImTwitter className="icon-twitter" /></a>
        <a href="#"><ImYoutube className="icon-youtube" /></a>
      </div>
      <ul className="footer-links">
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Idioma e legendas</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Audiodescrição</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Centro de ajuda</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Cartão Pré Pago</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Imprensa</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Relações com investidores</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Carreiras</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Termos de Uso</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Privacidade</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Avisos Legais</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Preferências de cookies</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Informações corporativas</span></a></li>
        <li className="footer-link-wrapper"><a href="#" className="footer-link"><span className="footer-link-content">Entre em contato</span></a></li>
      </ul>
      <div className="footer-service">
        <button className="service-code">Código de Serviço</button>
      </div>
      <div className="footer-copyright">
        <span>Feito com ❤ por Daniel --
        Direitos de imagem para a Netflix -- 
        Site desenvolvido com a API da <a href="https://www.themoviedb.org/?language=pt-BR">TMDB</a></span>
      </div>
    </div>
  );
}

export default Index;
