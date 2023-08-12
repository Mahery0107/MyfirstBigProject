import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './ajoutHead.css'
import NavBaradmin from '../NavBarAdmin';

const Ajoutactus = () => {

    const navigate = useNavigate() ;
    const [actuInput, setActu] = useState({
        title1 : "",
        extrait : "", 
        descri2: "",
      });
           
    const [pictures, setPictures] = useState([]);
    const handleInput = (e)  => 
        {
            e.persist();

            setActu({...actuInput,[ e.target.name] : e.target.value});
        }
     const handleImage   = (e)  => 
     {
        setPictures({...pictures, media: e.target.files[0]});
     }
    
    const handleSubmit  = (e)  => 
        {
            e.preventDefault();

            const formdata = new FormData();
            formdata.append('title1',actuInput.title1);
            formdata.append('extrait',actuInput.extrait);
            formdata.append('descri2',actuInput.descri2);
            formdata.append('media', pictures.media);

            axios.post('api/add_actus', formdata).then(res  => 
                {
                    if(res.data.status === 200)
                    {
                        swal("Success",res.data.message,'success') ;
                        navigate('/admin');
                    }
                })
        }

    return (
    <div>
        
        <div className='actus-body'>
                 <h1 className='title-ajout'>Ajout</h1>
             <form className='formulaire' onSubmit={handleSubmit} id='Evnmt_form'>
                    <div class="form-group">
                        <label for="Email1">Titres :</label>
                        <input type="text" name="title1" onChange={handleInput} value={actuInput.title1} className="form-control" id="nom1" aria-describedby="emailHelp"  />
                        
                    </div>
                
                    <div class="form-group">
                        <label for="Email1">Extraits :</label>
                        <input type="text" name="extrait" onChange={handleInput} value={actuInput.extrait}  className="form-control" id="descri1" aria-describedby="emailHelp"  />
                        
                    </div>
                    
                    <div class="form-group">
                        <label for="Email1">Déscriptions:</label>
                        <input type="text" name="descri2" onChange={handleInput} value={actuInput.descri2}  className="form-control" id="descri1" aria-describedby="emailHelp"  />
                        
                    </div>
                    <div class="form-group">
                        <label for="Email1">Images:</label>
                        <input type="file" name="media" onChange={handleImage}  className="form-control" id="img1" aria-describedby="emailHelp"  />
                        
                    </div>
                  
                    <div className='conexion'>
                        <div className='but'><button type="submit" className="btn btn-warning"><p>Ajouter</p></button> 
                        </div> 
                       
                    </div>
             </form>
        </div>
     </div>
       
    );
};

export default Ajoutactus;