import React from 'react';
import NavBar from '../../components/Navigation/NavBar';
import { Link } from 'react-router-dom';
const Manao = () => {
    return (
        <div className='manao_body'>
              <NavBar />
               <div className='contenu_an'> 
                
               <h1 id='petitTitres'>MANAO AGIR</h1>
              <p id='paraphs'>Voici donc un petit historique de l'ONG MANAO AGIR.</p>
              <p id='paraphs'>« MANAO AGIR » est autonome privée à but lucratif. Les revenus, produits ou biens de
                                l’ONG seront exclusivement consacrés à la réalisation de ses objectifs et ne doivent en
                                aucun façon être repartagés entre ses membres.</p>
              <p>Elle exerce ses activités suivant le principe du bénévolat. </p>
              <p id='paraphs'>« MANAO AGIR » a pour but de contribuer à l’atteinte de l’objectif de développement
                            durable par la promotion des actions d’économie sociale et solidaire se fixe les objectifs
                            suivants :</p>
                    <ul>



                        <li>Secteurs économique, agricole et élevages</li>
                        <li>Secteurs socio-culturels</li>
                        <li>Secteurs pédagogique</li>
                        <li>Secteurs écologiques</li>

                    </ul>
         
               <p id='paraphs'>La qualité de membre de « MANAO AGIR » est attribuée à toute personne physique ou
                            morale œuvrant directement ou indirectement et soutenant les principes, les objectifs et
                            activités de l’ONG définis.</p>
          
      
               </div>
        </div>
    );
};

export default Manao;
