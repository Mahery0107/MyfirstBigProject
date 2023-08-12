import React from 'react';
import Fond1 from "../../sary/162.jpg"
import NavBar from '../Navigation/NavBar';

const Plusdetailsactive = () => {
    return (
        <div className='detailsbodyactive'>
            <NavBar />
            <div className='details-body'>
                <div className='body-left '>
                    <div class=" Carouses">
                        <div class="item">
                            <img src={Fond1} class="d-block  sary_details" alt="..."/>
                        </div>
                    
                    </div>
            </div>
            <div className='body-right'>

                       <h5> Bienvenue  <br/> Cabinet Nakay ANTANANARIVO </h5>
                        <p>C'est notre siège social dépuis 2018. Il se situe à Météo Avaradoha, près de l'assurance MaMa.</p>
                        <p>L'adresse exacte : lot II P 154 JC Météo Avaradoha Antananrivo 101</p>
            </div>   
        
        </div>
      
  
    </div>
    );
};

export default Plusdetailsactive;
