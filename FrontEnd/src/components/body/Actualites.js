import React, {useEffect, useState} from 'react';
import './actualite.css'
import Aos from 'aos' ;
import { Link, Navigate, useNavigate, createSearchParams, useParams } from 'react-router-dom';

import '../../../node_modules/aos/dist/aos.css' ;

import NavBar from '../../components/Navigation/NavBar';

import axios from 'axios';

const Actualites = () => {
    
    const [actualiteInput, setActualite] = useState([]);
       const navigate = useNavigate(); 
    useEffect(()  => {
        Aos.init();

        axios.get("/api/get_actus").then(res =>{
            if(res.data.status === 200) {
                setActualite(res.data.actus);
            }
        } )
    },[]);

    const gotocoment =  (e,id) => 
    {
        e.preventDefault(); 
        if(localStorage.getItem('auth_token'))
         {   
            navigate('/Plusdactus/'+id);

         }
        else 
         {
         
            navigate({
                pathname : '/Login' ,
              //  search : `?target=${window.origin}/Plusdev`
              search : `?${createSearchParams({target:`${window.origin}/Plusdactus/`+id})}`
            });
         }
    }
    const  gotodetails =  (e,id) => 
    {
        e.preventDefault(); 
        if(localStorage.getItem('auth_token'))
         {   
            navigate('/Plusdactus/'+id);

         }
        else 
         {
         
            navigate({
                pathname : '/Login' ,
              //  search : `?target=${window.origin}/Plusdev`
              search : `?${createSearchParams({target:`${window.origin}/Plusdactus/`+id})}`
            });
         }
    }
   

  var showActualiteList = '' ;
  showActualiteList = actualiteInput.map((item)=>{
    return(
                     
     
              
         
                <div data-aos="fade-zoom-in"   data-aos-offset='100'   className='pic'  key={item.id}>
                        <img src={`http://localhost:8000/${item.videos}`} alt='flag'/>
                        <div className="data-container">
                            <h3 class="card-text">{item.titres}</h3>
                       
                            <Link onClick={e => gotodetails(e, item.id)}  id='bouton1' className='btn btn-success  '> <i class="fas fa-plus"></i>  Voir Plus</Link>
                        </div>
                </div>
       
       
       
           
     

    )

  })

    return (
        <div>
           <NavBar />
           <h3 className='voir-titles'>Quelques photos de notres équipes </h3>
            <div className='actus-body py-4 py-lg-5 container'>
               <div className='photo-gallery'>     
               {showActualiteList} 
               </div>   
            </div>
            
        </div>
    );
};

export default Actualites;