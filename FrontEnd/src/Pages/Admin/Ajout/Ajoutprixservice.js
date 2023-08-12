import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './ajoutHead.css'
import NavBaradmin from '../NavBarAdmin';
const Ajoutprixservice = () => {

    const[prixInput, setPrice] = useState({
        service: "",
        option: "",
        unite: "",
        prix: "",

    });
    const redirection = useNavigate();
    const handleInput = (e)  =>{
       e.persist();

       setPrice({...prixInput, [e.target.name]: e.target.value});
    }

    const submitPrix = (e) =>{
        e.preventDefault();

        const data = {
            service : prixInput.service,
            option : prixInput.option,
            unite: prixInput.unite,
            prix: prixInput.prix,
        }

        axios.post('api/add-priceService', data).then( res =>{
             if(res.data.status === 200)
             {
                swal('Réussi', res.data.message, "success");
                redirection('/admin');
             }
        } )
    }

    return (
    <div>
       
        <div className='ajout-price_service_body'>
          <h1 className='title-ajout'>Ajout</h1>
              <form className='formulaire' onSubmit={submitPrix} id='Offre_form'  >
                    <div class="form-group">
                        <label for="Email1">Service :</label>
                        <input type="text" name="service"  onChange={handleInput} value={prixInput.service}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Option:</label>
                        <input type="text" name="option"  onChange={handleInput} value={prixInput.option}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Unité:</label>
                        <input type="text" name="unite"  onChange={handleInput} value={prixInput.unite}  className="form-control" id="nom1" aria-describedby="emailHelp"  />
                      
                    </div>
                    <div class="form-group">
                        <label for="Email1">Prix:</label>
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

export default Ajoutprixservice;