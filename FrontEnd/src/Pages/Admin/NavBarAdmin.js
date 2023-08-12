import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavAdmin.css'
import Lcn from '../../sary/Model_logo.jpg'
const NavBaradmin = () => {

    const navigate = useNavigate();

    const logoutadminSubmit = (e)  => {
        e.preventDefault();
        localStorage.removeItem("auth_name");
        localStorage.removeItem("auth_token");

        navigate('/');

    }

    return (
     
            <nav className="sb-topnav navbar navbar-expand   navig_admin">
          
            <Link className="navbar-brand ps-3" to="/admin"><img className='logo_CN' alt='Logo du site' src={Lcn} /></Link>
          
         
          
           
          
            <ul className="navbar-nav ms-auto ms-md-8 me-3 me-lg-4 deconect">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                     
                   
                        <li onClick={logoutadminSubmit}><Link className="dropdown-item" to="#!">se déconnecter</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
      
    );
};

export default NavBaradmin;