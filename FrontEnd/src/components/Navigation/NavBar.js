import {Component} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaBars, FaSistrix, FaTimes} from '../../../node_modules/react-icons/fa'
import axios from 'axios'
import { useState } from 'react'
import swal from 'sweetalert' ;

import Lcn from '../../sary/Model_logo.jpg'

import "./navcss.css"
const  NavBar = () => {
    const [show, setShow] = useState(false);
    const vavigate = useNavigate();
    const logoutSubmit = (e) =>{
      e.preventDefault();
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
    
      vavigate('/');
   
    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
     <div  className={show ? "links active" : "links"} >
         <Link  className='button' onClick={ () => handleClick()} to={'/Login'}   >Connexion</Link>
     </div>
  
);

    }
    else
     {
      AuthButtons = (
        <div>
            <button type="button" onClick={logoutSubmit} className='nav-link btn btn-danger btn-sm text-white'  >Déconnexion</button>
        </div>
      );
    }
  
    function handleClick() {
     return  setShow(!show)
     }
  return (
    <div className='Navbars container-fluid fixed-top'>
         <div className='logo'>
         <Link to={'/'}><img className='logo_CN' alt='Logo du site' src={Lcn} /></Link> 
         </div>
         <div className={show ? "links active" : "links"}>
         <Link  className='menu' onClick={ () => handleClick()} to={'/'}>Accueil</Link>
         <Link className='menu' onClick={ () => handleClick()} to={'/Infos'}>Informations</Link>
         <Link className='menu' onClick={ () => handleClick()} to={'/History'}>Historique</Link>
          {AuthButtons}
       
         </div>
         <div onClick={ () => handleClick()} className={show ? "bars-button active" : "bars-button"}>
         <span></span>
         <span></span>
         <span></span>
      
         </div>
      
    </div>
       
   
    
  )
  }

export default NavBar;
