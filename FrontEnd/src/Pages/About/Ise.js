import React from 'react';
import NavBar from '../../components/Navigation/NavBar';
import { Link } from 'react-router-dom';
const Ise = () => {
    return (
        <div className='body_ise'>
               <NavBar />
               <div className='contenu_an'>
            
               <h1 id='petitTitres'>INSTITUT SUPERIEUR EXCELLENT</h1>
              <p id='paraphs'>L'ISE est une institut rattachée au cabinet nakay, avec tant de filères de votre choix; comme : </p>
                    <ul>
                        <li>Finance et Comptabilité</li>
                        <li>Contrôle et Audit</li>
                        <li> Ressources humaines</li>
                        <li>Informatique de gestion</li>
                        <li>Administration d’entreprise</li>
                        <li> Entreprenariat et Management</li>
                        <li> Commerce et Marketing</li>
                        <li>Communication et Journalisme</li>

                    </ul>
         
               <p id='paraphs'>Le niveau DTS a 32  comme matières et 48 pour le niveau LICENCE</p>
               <p id='paraphs'>Et le frais de formation est moins chère puisque le prix dépend de ces matières.</p>
      
               </div>
        </div>
    );
};

export default Ise;