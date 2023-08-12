import React, { useEffect, useState } from 'react';
import './edit.css'
import { Link,  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'; 
import NavBaradmin from '../NavBarAdmin';

const Editoffer = () => {

    const [offreInput, setOffre] = useState({});
  
    const navigate = useNavigate() ;
    const {offre_id} = useParams();

    useEffect(() =>
    {  
        fetchAllOffre();
    },[]);



    const  fetchAllOffre = ()=>
    {
        axios.get('/api/edit-offre/'+offre_id).then(res =>
            {
                setOffre({
            nom_offre: res.data.offre.nom_offres,
            entite_id: res.data.offre.entite_id,
            descripts_id: res.data.offre.description_id,
            composant_id: res.data.offre.composant_id ,
           
                    });
            });
    }
    
    const submitForm = (e) => 
    {
         e.preventDefault();
            axios.put('/api/update-offre/'+offre_id,offreInput).then((res)=>
            {
                if(res.data.status === 200)
                {
                    swal('Réussi',res.data.message,'success');
                    navigate('/admin');
                 }
            
            })
    }

    const handleInput = (e)  =>
    {
        e.persist();
        setOffre({...offreInput, [e.target.name]: e.target.value })
    }
 
    return (
    <div>
        <NavBaradmin />  
        <div className='editoffer_body'>
                     <h5><Link to='/admin' id='backbtn'><i class="fa-solid fa-backward"></i></Link></h5>
                <h1 className='title-edit'>Modifications</h1>
                <form className='formulaire' >
                    <div class="form-group mb-3">
                        <label for="Email1">Nom Offre:</label>
                        <input type="text" name="nom_offre"  className="form-control" id="nom1" onChange={handleInput} value={offreInput.nom_offre || ''} aria-describedby="emailHelp"  />
                        
                    </div>
                    <div class="form-group mb-3">
                        <label for="Email1">Entité(s) :</label>
                        <input name='entite_id'   className='form-control' onChange={handleInput} value={offreInput.entite_id || ''} />
                          
                        
                    </div>
                    <div class="form-group mb-3">
                        <label for="Email1">Déscription(s) :</label>
                        <input name='descripts_id'   className='form-control' onChange={handleInput} value={offreInput.descripts_id || ''} />
                        
                        
                    </div>
                    <div class="form-group mb-3">
                        <label>Choisir composant:</label>
                        <input name='composant_id'  onChange={handleInput} value={offreInput.composant_id || ''}  className='form-control' />
                         
                      
                    </div>
                        <div className='but'><button onClick={submitForm} type="submit" className="btn btn-secondary"><p>Modifier</p></button> 
                        </div> 
                 
                </form>
          
        </div>
     </div>
      
    );
};

export default Editoffer;