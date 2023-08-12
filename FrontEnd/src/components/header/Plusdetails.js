import React, {useEffect, useState} from 'react';
import './plusdetailscss.css'
import Fond2 from "../../sary/162.jpg"
import Fond1 from "../../sary/cn1.jpg"
import Fond3 from "../../sary/3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import NavBar from '../../components/Navigation/NavBar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Plusdetails = () => {

  
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
    

    useEffect(()=>
    { 
         fetchAllsliders();
    },[]);

    const   fetchAllsliders = ()=>
    {
           axios.get('/api/edit-slider/'+id).then(res =>{
             
         
             setInputs(res.data.slider);
               
               
                 } );
      }
     

  


    return (
    <div className='plusdetails'>
            <NavBar />
            <div className='details-body'>
                  <div className='body-left '>
                      <div class=" Carouses">
                               <div class="item">
                                <img src={`http://localhost:8000/${inputs.images}`} class="d-block  sary_details" alt="..."/>
                                </div>
                          
                              
                      </div>
                  </div>
                  <div className='body-right'>

                        <h5 id='infoplus'>{inputs.titre} </h5>
                        <p style={{wordBreak:'break-word'}}>{inputs.description} <br/>{inputs.description2}</p>
                  </div>   
              
            </div>
      
    </div>
       
      
    );
};

export default Plusdetails;