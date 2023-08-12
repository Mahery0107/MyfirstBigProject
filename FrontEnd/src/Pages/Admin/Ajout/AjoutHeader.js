import React, { useState } from 'react';
import './ajoutHead.css'
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import NavBaradmin from '../NavBarAdmin';
const AjoutHeader = () => {
  
    const navigate = useNavigate() ;
    const [picture, setPicture] =   useState([]);
  const [headerInput, setHeader] =   useState({
       nom : "",
       titres : "",
       descris: "",
       descrips: "",
     
     
    });
  
   const handleImage  = (e)  => {
           e.persist();
           setPicture({...picture, img: e.target.files[0]});
   }

   

  const handleInput = (e)  => {
    e.persist();
    setHeader({...headerInput, [e.target.name]: e.target.value })
  }

  const submitHeader = (e)  => {
    e.preventDefault();  


    const formData=  new  FormData();

    formData.append('nom',   headerInput.nom );
    formData.append('titres',   headerInput.titres );
    formData.append('descris',   headerInput.descris );
    formData.append('descrips',   headerInput.  descrips);
    formData.append('img',  picture.img );
      
    
    
   
   
      
    axios.post('/api/add_slider', formData).then(res =>{
        if(res.data.status === 200){
            swal("Réussi",res.data.message,"success");
            document.getElementById('Header_form').reset();
           
            navigate('/admin');
        }
        else if (res.data.status === 400){
               swal("All Fields are mandetory","","error");
             
                    }
    });



  }

    return (
    <div>
         
        <div className='ajoutheader-body'>
             <h1 className='title-ajout'>Ajout</h1>
                <form className='formulaire' onSubmit={submitHeader} id='Header_form'>
                    <div class="form-group">
                        <label for="Email1">Nom :</label>
                        <input type="text" name="nom"  onChange={handleInput} value={headerInput.nom}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Titres :</label>
                        <input type="text" name="titres" onChange={handleInput} value={headerInput.titres}  className="form-control" id="titre1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Petit Déscriptions:</label>
                        <input type="text" name="descris"  onChange={handleInput} value={headerInput.descris} className="form-control" id="descri1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Longues Déscriptions:</label>
                        <input type="text" name="descrips"  onChange={handleInput} value={headerInput.descrips} className="form-control" id="descri1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Images :</label>
                        <input type="file" name="img"  onChange={handleImage}  className="form-control" id="img1" aria-describedby="emailHelp"  />
                      
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

export default AjoutHeader;