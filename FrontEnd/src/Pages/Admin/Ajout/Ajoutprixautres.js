import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Ajoutprixautres = () => {
        const navigate = useNavigate();
        const [prixInput,setPrix] = useState({
            designation : "",
            prix: "",
                   })
         
        const handleInput = (e)  => 
            {
                    e.persist();

                    setPrix({...prixInput, [e.target.name]: e.target.value});

            }

        const submitPrix = (e)  => 
        {
            e.preventDefault();

            const data = {
                designation : prixInput.designation,
                prix: prixInput.prix,
            }
            
            axios.post('/api/add_priceother',data).then(res =>{

                 if( res.data.status == 200)
                 {
                    swal("Réussi",res.data.message,"success");
                    navigate('/admin');
                 }
            } )
            
        }

    return (
        <div>
            <div className='body_ajoutprix'>
                <h1 className='title-ajout'>Ajout</h1>
                <form className='formulaire' onSubmit={submitPrix} id='Offre_form'  >
                    <div class="form-group">
                        <label for="Email1">Designation:</label>
                        <input type="text" name="designation"  onChange={handleInput} value={prixInput.designation}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    
                    <div class="form-group">
                        <label for="Email1">Montant :</label>
                        <input type="text" name="prix"  onChange={handleInput} value={prixInput.prix} placeholder='en Ariary' className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
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

export default Ajoutprixautres;