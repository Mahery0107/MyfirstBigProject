import React from 'react';
import NavBar from '../../components/Navigation/NavBar';
import Organig from '../../sary/organigramme.png' ;

const Organigramme = () => {
    return (
        <div>  
               <NavBar />
               <h3 className='voir-titles'>Organigramme du Cabinet Nakay</h3>
                <div className='container organi_body'>
                <p id='paragraph' style={{wordWrap: 'break-word'}}>Voici un schéma qui présente la structure générale de  l’entreprise. Il comporte les différentes fonctions que l’on puisse trouver dans le cabinet d’étude et d’externalisation.</p>
             
                <img className='img_org' src={Organig} />
                </div>      
        </div>
       
    );
};

export default Organigramme;