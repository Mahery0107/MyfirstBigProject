
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './offrescss.css'
import axios from 'axios';

const Offre = () => {
    const [ofrres, setOffre] =  useState([]);

    useEffect(()=>
    {
       axios.get('/api/essaie').then(res =>
            {
                if(res.data.status === 200)
                {
                  setOffre(res.data.offree)
                }
            });
    }
    ,[]);
  
   console.log(ofrres)  ;
   var offreslist = "" ;
   offreslist = Object.keys(ofrres).map((offreName)  => {
     return(
      <div className='box' id='off'>
             <h5 id='titre_offre'>{offreName} </h5>
             <Link to= {{pathname:"/Voirplus/"+offreName}} className='btn btn-success btn-sm voirp'> <i class="fas fa-plus"></i> Voir Plus</Link>
      </div>   
     )
   })
  

    return (
        
            <div className='container'>
                { offreslist}
            </div>   
     
    );
};

export default Offre;