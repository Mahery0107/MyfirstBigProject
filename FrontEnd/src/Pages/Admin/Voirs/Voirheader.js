import axios from 'axios';
import React, {useParams, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Voirheader = () => {
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{ 
        fetchAllHeaders();
    },[]);

    const  fetchAllHeaders = () =>{
       axios.get('/api/header/'+id+'/edit')
        .then(res=>{
            setInputs({
                nom: res.data.nom,
                titres: res.data.titre,
                descris: res.data.description,
                img: res.data.images,
               
            });
        }); }

    return (
        <div className='voirheader-body'>
             <div className='main-view'>
                    <div className='divi'><h5 id='title2'>Informations :</h5> </div>
                        <p id='infos'>-Nom du header : { inputs.nom }</p>
                        <p id='infos'>-Titre : { inputs.titres }</p>
                        <p id='infos'>-Déscription : { inputs.descris }</p>
                        <p id='infos'>-Image : { inputs.img }</p>
                        
                  
             </div>
           <h5><Link to='/AcceuilDouane' id='conect_login'>Retour</Link></h5> 
       </div>
       
    );
};

export default Voirheader;