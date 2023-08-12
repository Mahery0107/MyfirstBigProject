import React from 'react';
import NavBar from '../../components/Navigation/NavBar';
import './ancss.css'
import { Link } from 'react-router-dom';
const An = () => {
    return (
        <div className='An_body'>
               <NavBar />
               <div className='contenu_an'>
             
               <h1 id='petitTitres'>ASSOCIATION NAKAY</h1>
              <p id='paraphs'  style={{wordWrap: 'break-word'}}>L'association Nakay est l'une des partenaires fiables de notre cabinet.</p>
              <p id='paraphs'  style={{wordWrap: 'break-word'}}>L’Association Nakay est une association à but non lucratif ouvert et accessible à tout personnes de plus de 18 ans. Elle a son siège à Météo Avaradoha Antananarivo et aussi un bureau provincial à Tsaramandroso Ambany Mahajanga en face de l’église catholique.</p>
              <h2 id='petits'>C’est quoi vraiment l’objectif de l’association ? </h2>
              <p id='paraphs'  style={{wordWrap: 'break-word'}}>L’association Nakay a les objectifs : </p>
                 <ul>
                        <li>-D’aider et assister les jeunes dans la réalisation de son projet ;,</li>


                        <li>-De Collaborer aux entités et associations qui ont le même objectif ;</li>

                  </ul>
            <h2 id='petits'>Afin d’intégrer dans l’association, voici les critères pour être dans les membres : </h2>   
            <p id='paraphs'  style={{wordWrap: 'break-word'}}>Les membres de l’Association sont toutes des personnes:</p>
             <ul>
                    <li>Ayant l’âge entre 18 à 60ans</li>
                    <li>Adhérant au présent statut.</li>
                    <li>Ayant l’esprit sain et la volonté de servir l’humanité et être un bon citoyen.</li>

            </ul>
            <p  style={{wordWrap: 'break-word'}}> Pour être membre, une demande d’adhésion doit être adressée au parrain et ce dernier va le transférer au comité.</p>
          
            <h2>Les obligations des membres :</h2>
            <p id='paraphs'  style={{wordWrap: 'break-word'}}>***Quelles sont alors les conditions d’adhésion ?</p>
            <p  style={{wordWrap: 'break-word'}}>Toutes les personnes (masculin ou féminin) âgées de 18 ans et plus, révolus acceptant les dispositions du statut et remplissant les conditions préconisées par le présent règlement intérieur en matière de cotisation.</p>
            <h4 id='petits'>Cotisation</h4>
            <p  style={{wordWrap: 'break-word'}} id='paraphs'>La cotisation des membres actifs est fixée comme suit :</p>
            <ul>
                <li>Droit d’adhésion: 10.000 Ariary (obligatoire au moment de l’inscription) ;</li>
                <li>Cotisation mensuelle 	: 3.000 Ariary</li>
            </ul>
            <p  style={{wordWrap: 'break-word'}}>Donc, Nous faisons appel à tous, surtout les jeunes, de rejoindre cette association. L'adhésion et l'effort conjugués de tous sont plus que jamais indispensables. Regardons ensemble la situation de notre organisation, sans complaisance. Ainsi que de rendre hommage à la solidarité humaine.</p>	
               </div>
            

        </div>
    );
};

export default An;