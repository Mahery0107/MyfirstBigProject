import React, { useEffect, useState } from 'react';
import './edit.css'

import { Link,  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import NavBaradmin from '../NavBarAdmin';
const Edit = () => {
const [headerInput, setHeader] = useState({});
const navigate = useNavigate() ;useEffect(() =>{  
    fetchAllHeaders();
},[]);

const {id} = useParams();

useEffect(() =>{  
    fetchAllHeaders();
},[]);

   const  fetchAllHeaders = ()=>{
    axios.get('/api/edit-slider/'+id).then(res =>{
      
   
       setHeader({
            nom: res.data.slider.nom,
            titres: res.data.slider.titre,
            descris: res.data.slider.description,
            descrips: res.data.slider.description2,
         
           
        });
        
        
 } );
   }
   console.log(headerInput);
   const submitForm = (e) => {
    // console.log(inputs);
    e.preventDefault();
     axios.put('/api/update-slider/'+id,headerInput).then((res)=>{
        if(res.data.status === 200){
            swal('Réussi',res.data.message,'success');
            navigate('/admin');
       
        }
    
      })
   }


 const handleInput = (e)  =>{
    e.persist();
    setHeader({...headerInput, [e.target.name]: e.target.value })
 }

 

    return (    
        <div>
           <NavBaradmin />  
           <div className='editHead-body'>
          
          <h5><Link to='/admin' id='backbtn'><i class="fa-solid fa-backward"></i></Link></h5>  <h1 className='title-edit'>Modifications</h1>
             <form className='formulaire' >
                 <div class="form-group">
                     <label for="nom">Nom :</label>
                     <input type="text" name="nom"  onChange={handleInput} value={headerInput.nom || ''}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                     
                 </div>
                 <div class="form-group">
                     <label for="titres">Titres :</label>
                     <input type="text" name="titres" onChange={handleInput} value={headerInput.titres || ''}  className="form-control" id="titre1" aria-describedby="emailHelp"  />
                     
                 </div>
                 <div class="form-group">
                     <label for="descris">Déscriptions:</label>
                     <input type="text" name="descris"  onChange={handleInput} value={headerInput.descris || ''} className="form-control" id="descri1" aria-describedby="emailHelp"  />
                     
                 </div>
                 <div class="form-group">
                     <label for="descris">Déscriptions2:</label>
                     <input type="text" name="descrips"  onChange={handleInput} value={headerInput.descrips || ''} className="form-control" id="descri1" aria-describedby="emailHelp"  />
                     
                 </div>
                 <div class="form-group">
                     <label for="img">Images :</label>
                     <input type="file" name="img"  onChange={handleInput} value={headerInput.img || ''}  className="form-control" id="img1" aria-describedby="emailHelp"  />
                     
                 </div>
              
                     <div className='buts'><button onClick={submitForm} type="submit" className="btn btn-danger"><p>Modifier</p></button> 
                     </div> 
                    
               
             </form>
          
     </div>
        </div>
       
       
    );
};

export default Edit;