import React, {useState} from 'react';
import axios from 'axios';
import './ajoutHead.css'
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import NavBaradmin from '../NavBarAdmin';

const AjoutEvnmt = () => {
     
    const [pictures, setPictures] = useState([]);
    const [evenmentInput, setEvenment] = useState({
         title1: "",
         extrait: "",
         descri2: "",
        
        


    });
    const navigate = useNavigate() ;
    const handleImage   = (e)  =>{
        setPictures({...pictures, media: e.target.files[0]});
    }
    const handleInput = (e)  =>
    {
        e.persist();
        setEvenment({...evenmentInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)  => {
     e.preventDefault();

        const formData = new FormData(); 
        formData.append('title1',evenmentInput.title1);
        formData.append('extrait', evenmentInput.extrait);
        formData.append('descri2',evenmentInput.descri2);
        formData.append('media', pictures.media);
       

      

       

        axios.post('/api/add-evenmt',formData ).then(res  =>{
            if(res.data.status === 200)
            {
                swal("Réussi",res.data.message,"success");
                document.getElementById('Evnmt_form').reset();
                navigate('/admin');
            }
            else 
            {

            }

        } )
    }

    return (
     
    <div>
        <div className='ajoutevenmt-body '>
             <h1 className='title-ajout'>Ajout</h1>
             <form className='formulaire' onSubmit={handleSubmit} id='Evnmt_form'>
                    <div class="form-group">
                        <label for="Email1">Titres :</label>
                        <input type="text" name="title1" onChange={handleInput} value={evenmentInput.title1} className="form-control" id="nom1" aria-describedby="emailHelp"  />
                        
                    </div>
                
                    <div class="form-group">
                        <label for="Email1">Petites Déscriptions:</label>
                        <input type="text" name="extrait" onChange={handleInput} value={evenmentInput.extrait}  className="form-control" id="descri1" aria-describedby="emailHelp"  />
                        
                    </div>
                    
                    <div class="form-group">
                        <label for="Email1">Longues Déscriptions:</label>
                        <input type="text" name="descri2" onChange={handleInput} value={evenmentInput.descri2}  className="form-control" id="descri1" aria-describedby="emailHelp"  />
                        
                    </div>
                    <div class="form-group">
                        <label for="Email1">Images :</label>
                        <input type="file" name="media" onChange={handleImage}  className="form-control" id="img1" aria-describedby="emailHelp"  />
                        
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

export default AjoutEvnmt;