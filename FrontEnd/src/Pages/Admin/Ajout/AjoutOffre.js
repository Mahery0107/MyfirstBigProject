import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './ajoutHead.css'
import NavBaradmin from '../NavBarAdmin';

const AjoutOffre = () => {
  
    const [entitelist, setEntite] = useState([]);
    const [descriptliste, setDescriptliste] = useState([]);
    const[composantlist, setComposantlist] = useState([]);
    const navigate = useNavigate() ;
    const[offreInput, setOffre] = useState({
        nom_offre: "",
        entite_id: "",
        descripts_id: "",
        composant_id: "",
      });
    const handleInput = (e) =>
      {
        e.persist();
   
        setOffre({...offreInput, [e.target.name]: e.target.value});
   
        }
   

    useEffect(()  =>{
      
            axios.get('api/all-entite').then( res  => 
                {
           
                if (res.data.status === 200) 
                {
                    setEntite(res.data.entite);
                }
           

               });
            axios.get('api/all-description').then(res  =>
                {
                if(res.data.status === 200)
                {
                    setDescriptliste(res.data.description);
                
                }
    
                });
            
            axios.get('api/all-composant').then(res  =>
                {
                if(res.data.status === 200)
                {
                setComposantlist(res.data.composant);
                
                }
    
            });
       
    }, []  );

    const offreSubmit = (e) => {
        e.preventDefault();
         
        const data = 
          {

            nom_offre: offreInput.nom_offre,
            entite_id: offreInput.entite_id,
            descripts_id:offreInput.descripts_id, 
            composant_id:  offreInput.composant_id ,
           }

        axios.post('api/add-offres', data).then(res =>
            {
               if(res.data.status === 200)
               {
                    swal("Réussi",res.data.message,"success");
                    document.getElementById('Offre_form').reset();
                
                    navigate('/admin');
               }

              
       
       
            })

    }

    


    return (
    <div>
       
        <div className='ajoutoffre-body'>
            <h1 className='title-ajout'>Ajout</h1>


            <form className='formulaire' onSubmit={offreSubmit} id='Offre_form'>
               
                <div className=''>
                <div class="form-group mb-3">
                        <label for="Email1">Nom Offre:</label>
                        <input type="text" name="nom_offre"  className="form-control" id="nom1" onChange={handleInput} value={offreInput.nom_offre} aria-describedby="emailHelp"  />
                        
                    </div>
                    <div class="form-group mb-3">
                        <label for="Email1">Entité(s) :</label>
                        <input name='entite_id'   className='form-control' onChange={handleInput} value={offreInput.entite_id} />
                          
                        
                    </div>
                    <div class="form-group mb-3">
                        <label for="Email1">Niveau :</label>
                        <input name='descripts_id'   className='form-control' onChange={handleInput} value={offreInput.descripts_id} />
                        
                        
                    </div>
                    <div class="form-group mb-3">
                        <label>Déscription :</label>
                        <input name='composant_id'  onChange={handleInput} value={offreInput.composant_id}  className='form-control' />
                         
                      
                    </div>
                    
                    
                </div>
          
            

                   <div className='conexion'>
                        <div className='but'><button type="submit" className="btn btn-primary bouton_ajout"><p>Ajouter</p></button> 
                        </div> 
                       
                    </div>
            </form>
          
             
        </div>
     </div>
       
    );
};

export default AjoutOffre;