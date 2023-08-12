import React, { useEffect, useState } from 'react';
import './voirplus.css'
import NavBar from '../../components/Navigation/NavBar';
import axios from 'axios';
import { groupBy } from 'lodash'
import { useParams } from 'react-router-dom';

const Voirplus = () => {

    const [offreInput, setOffre] = useState([]);
    const {nom_offres} = useParams();

    useEffect(() => 
        {
            fetchAllOffre(); 
        });
    const   fetchAllOffre = ()=>
    {
        axios.get('api/get_offre/'+nom_offres).then(res  => 
            {
                  if(res.data.status === 200)
                  {
                    setOffre(res.data.offree);
                  }
    
            })
    }  
   
    

    return (
        <div className='body-voir'>
              <NavBar />
              {offreInput[nom_offres] ? <>
                <h3 className='voir-titles'>{nom_offres}</h3>
              <div className='voir-formations'>
                    {Object.keys(offreInput[nom_offres]).map(entite_id => {

                        return (
                            <div className='voir-formation mb-4'>
                         
                                    <h3 className='voir-title'>{entite_id}</h3>
                                    {Object.keys(offreInput[nom_offres][entite_id]).map(description_id => {
                                        return (<>
                                    <p className='voir-sous-titre'><strong>{description_id}</strong></p>
                                    <ul>
                                    {Object.keys(offreInput[nom_offres][entite_id][description_id]).map(composant_id => {
                                        return <li id='liste'>{composant_id}</li>
                                    })}
            
                                    </ul>
                                    </>)   
                                    })}
                                    
                        
                            </div>
                        )
                    })}
              </div>
                </> : "loading"}
             
        </div>
    );
};

export default Voirplus;