import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../components/UserContext';
import './Sidebar.css'

const SideBarAdmin = () => {

    const {user} = useUser();
    
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Header</div>
                                <Link className="nav-link" to="/admin/AjoutHead">
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                 Ajouter 
                                </Link>
                                <div className="sb-sidenav-menu-heading">Offre</div>
                                <Link className="nav-link" to="/admin/AjoutOffre" >
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                    Ajouter une offre
                                  
                                </Link>
                                
                                <div className="sb-sidenav-menu-heading">Evènements</div>
                                <Link className="nav-link" to="/admin/AjoutEvenmt">
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                    Ajouter un évènement
                                </Link>

                                <div className="sb-sidenav-menu-heading">Prix CN</div>
                                <Link className="nav-link" to="/admin/AjoutPrixFormation">
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                    Ajouter prix formation
                                </Link>
                                <Link className="nav-link" to='/admin/AjoutPrixService'>
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                    Ajouter prix Services
                                </Link>
                                <Link className="nav-link" to='/admin/AjoutPrixautres'>
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                    Ajouter prix Autres
                                </Link>

                                <div className="sb-sidenav-menu-heading">Actualités</div>
                                <Link className="nav-link" to='/admin/Ajoutplusactus'>
                                    <div className="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                                    Ajouter Actualités
                                </Link>
                              
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Connecté en tant que:</div>
                            <p>{user.username}</p>
                        </div>
        </nav>
    );
};

export default SideBarAdmin;