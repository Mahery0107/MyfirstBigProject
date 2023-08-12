
import React, { useEffect, useState } from 'react';


import './ajoutHead.css'
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import NavBaradmin from '../NavBarAdmin';



const AjoutEntité = () => {

    const[offreInput, setOffre] = useState({
        nom: "",
        descrip_id: "",
      });

    const navigate = useNavigate() ;

     const handleInput = (e) =>{
     e.persist();

     setOffre({...offreInput, [e.target.name]: e.target.value});

     }

     const [descriptliste, setDescriptliste] = useState([]);
     useEffect(()=>{
       
        axios.get('api/all-description').then(res  =>{
            if(res.data.status === 200)
            {
                setDescriptliste(res.data.description);
              
             }
    
         });

     },[]);

     const submitOffre = (e) =>{
        e.preventDefault();

        const data = {

        
            nom : offreInput.nom ,
            descrip_id:  offreInput.descrip_id ,
     }
      
     


        axios.post('api/add-entite', data).then(res  =>{
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
                        <label for="Email1">Entités :</label>
                        <input type="text" name="nom"  onChange={handleInput} value={offreInput.nom}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group mb-3">
                        <label>Choisir une description:</label>
                        <select name='descrip_id'  onChange={handleInput} value={offreInput.descrip_id}  className='form-control' >

                                 {
                                    descriptliste.map((i) =>{
                                        return(
                                            <option value={i.id} key={i.id}>{i.descriptions}</option>
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

export default AjoutEntité;