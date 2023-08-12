import React, { useEffect, useState } from 'react';
import './edit.css'
import { Link,  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'; 
import NavBaradmin from '../NavBarAdmin';


const Editevenmt = () => {

    const [evenmentInput, setEvenment] = useState({});
  
    const navigate = useNavigate() ;
    const {id} = useParams();

    useEffect(() =>
    {  
        fetchAllEvenmts();
    },[]);



    const  fetchAllEvenmts = ()=>
    {
        axios.get('/api/edit-evenment/'+id).then(res =>
            {
          setEvenment({
            title1: res.data.evenment.titres,
            extrait: res.data.evenment.extrait,
            descri2: res.data.evenment.descriptions,
    
           
                    });
            });
    }
    
    const submitForm = (e) => 
    {
         e.preventDefault();
            axios.put('/api/update-evenment/'+id,evenmentInput).then((res)=>
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
        setEvenment({...evenmentInput, [e.target.name]: e.target.value })
    }
 


    return (
    <div>
        <NavBaradmin />  
        <div className='editevnmt-body'>
                        <h5><Link to='/admin' id='backbtn'><i class="fa-solid fa-backward"></i></Link></h5>
             <h1 className='title-edit'>Modifications</h1>
 
                <form className='formulaire' id='Evnmt'>
                    <div class="form-group">
                        <label for="Email1">Titres :</label>
                        <input type="text" name="title1" onChange={handleInput} value={evenmentInput.title1 || ''} className="form-control" id="nom1" aria-describedby="emailHelp"  />
                        
                    </div>
                
                    <div class="form-group">
                        <label for="Email1">Petites Déscriptions:</label>
                        <input type="text" name="extrait" onChange={handleInput} value={evenmentInput.extrait || ''}  className="form-control" id="descri1" aria-describedby="emailHelp"  />
                        
                    </div>
                    
                    <div class="form-group">
                        <label for="Email1">Longues Déscriptions:</label>
                        <input type="text" name="descri2" onChange={handleInput} value={evenmentInput.descri2 || ''}  className="form-control" id="descri1" aria-describedby="emailHelp"  />
                        
                    </div>
                    <div class="form-group">
                        <label for="Email1">Images :</label>
                        <input type="file" name="media" onChange={handleInput} value={evenmentInput.media || ''}   className="form-control" id="img1" aria-describedby="emailHelp"  />
                        
                    </div>
                 
                 
                    <div className='conexion'>
                        <div className='buts'><button type="submit"  onClick={submitForm} className="btn btn-secondary"><p>Modifier</p></button> 
                        </div> 
                       
                    </div>
                </form>
            
        </div>
     </div>
       
    );
};

export default Editevenmt;