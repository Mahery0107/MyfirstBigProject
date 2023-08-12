import React, { Component, useState } from 'react'

import './ajoutHead.css'
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import NavBaradmin from '../NavBarAdmin';

 const AjoutComposant = () => {
 
      const[offreInput, setOffre] = useState({
        nom: "",
      });
      const navigate = useNavigate() ;

     const handleInput = (e) =>{
     e.persist();

     setOffre({...offreInput, [e.target.name]: e.target.value});

     }

     const submitOffre = (e) =>{
        e.preventDefault();

        const data = {

        
            nom : offreInput.nom ,
     }
      



        axios.post('api/add-component', data).then(res  =>{
                  if(res.data.status === 200)
                  {
                    swal("Réussi",res.data.message,"success");
                    document.getElementById('Offre_form').reset();
                   
                    navigate('/admin');
                

                  }
                  else {

                  }
        });
     }

    return (
    <div>
      
      <div className='ajoutComposan-body'>
                  <form className='formulaire' onSubmit={submitOffre} id='Offre_form'  >
                    <div class="form-group">
                        <label for="Email1">Nom composant :</label>
                        <input type="text" name="nom"  onChange={handleInput} value={offreInput.nom}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                 
                    <div className='conexion'>
                        <div className='but'><button type="submit" className="btn btn-primary"><p>Ajouter</p></button> 
                        </div> 
                       
                    </div>
               </form>
      </div>
   </div>
    
    )
  }

  export default  AjoutComposant ;
