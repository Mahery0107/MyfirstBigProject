import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
      <footer className="footer-page">

      <div className='foot'>
          
            <div class="footer-left">
                <h1 class="title">Infos Contacts</h1>
                <hr className='separator' />
                <div className='footer-menus'>
                    <i class="fa fa-map-marker"></i>
                    <p id='descrips'>Avaradoha Antananarivo -<span>Majunga Tsaràmandroso</span> </p>
                </div>

                <div className='footer-menu'>
                    <i class="fa fa-phone"></i>
                    <p id='descri'>0344440022 - 0343281166</p>
                </div>
                <div className='footer-menu'>
                    <i class="fa fa-envelope"></i>
                    <p className='p2'><a id='description' href="mailto:cabinet.nakay@gmail.com">cabinet.nakay@gmail.com</a></p>
                </div>
            </div>
            <div class="footer-right">
                <h1 class="title">Heure d'ouverture</h1>
                <hr className='separator' />
                    <p id='descri'>Lundi - Vendredi : 08h-12h  13h30-17h</p>
                    <p id='descri'>Samedi : 08h-12h</p>
                <div class="footer-icons">
                    <a className='reseau' href="https://www.facebook.com/Cabinet-Nakay-Formation-et-Stage-100876604670322"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://web.whatsapp.com"><i class="fa-brands fa-whatsapp"></i></a>
                 
                </div>
            </div>
      </div>
     
      <div class="footer-bottom">
         
          <h1 class="titre"><span class="t1">Cabinet</span><span class="t2">Nakay</span></h1>  
          <p class="footer-company-name">Copyright © 2023 by <strong> François RAZAFIMAMONJY</strong>-All rights reserved</p>
      </div>
  </footer>
    );
};

export default Footer;