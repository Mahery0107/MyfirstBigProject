import React, { useEffect, useState } from 'react';


import './ajoutHead.css'
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import NavBaradmin from '../NavBarAdmin';


 
    
const AjoutDescription = () => {

    const[offreInput, setOffre] = useState({
        nom: "",
        composant_id: "",
      });

    const navigate = useNavigate() ;

     const handleInput = (e) =>{
     e.persist();

     setOffre({...offreInput, [e.target.name]: e.target.value});

     }

     const[composantlist, setComposantlist] = useState([]);
     useEffect(()=>{
       
        axios.get('api/all-composant').then(res  =>
            {
            if(res.data.status === 200)
            {
            setComposantlist(res.data.composant);
              
             }
    
           });

     },[]);

     const submitOffre = (e) =>{
        e.preventDefault();

        const data = {

        
            nom : offreInput.nom ,
            composant_id:  offreInput.composant_id ,
     }
      
     


        axios.post('api/add-description', data).then(res  =>{
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
       
        <div className='ajoutdescri-body'>
                 <form className='formulaire' onSubmit={submitOffre} id='Offre_form'  >
                    <div class="form-group">
                        <label for="Email1">Nom description :</label>
                        <input type="text" name="nom"  onChange={handleInput} value={offreInput.nom}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group mb-3">
                        <label>Choisir composant:</label>
                        <select name='composant_id'  onChange={handleInput} value={offreInput.composant_id}  className='form-control' >
                            <option>Selectionner un Composant</option>
                                 {
                                    composantlist.map((item) =>{
                                        return(
                                            <option value={item.id} key={item.id}>{item.nom_composant}</option>
                                        )
                                    })
                                 }
                        </select> 
                      
                    </div>
                 
                    <div className='conexion'>
                        <div className='but'><button type="submit" className="btn btn-primary"><p>Ajouter</p></button> 
                        </div> 
                       
                    </div>
               </form>
        </div>
     </div>
       
    );
};

export default AjoutDescription;