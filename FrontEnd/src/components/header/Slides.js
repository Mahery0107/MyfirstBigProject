
import React, { useEffect, useState } from 'react';
import Fond2 from "../../sary/142.jpg"
import Fond1 from "../../sary/162.jpg"
import Fond3 from "../../sary/cn1.jpg"
import './carousel.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
export default function Slides() {

 const [headerInput, setHeader] = useState([]);

  useEffect(() => {

   axios.get('/api/get-header').then(res =>{
      
    if(res.data.status === 200)
    {
        // console.log(res.data.header);
         setHeader(res.data.header);
      
            }
    else{

    }
    
   });

  });

    var showallheaders = '' ;
    showallheaders = headerInput.map((item, idx) => {
       return (
        <div className="carousel-item" key={item.id}>
        
            <div className="carousel-caption">
              
                <div className="row" >
                  <div className="col-lg-5 col-md-12 col-12">
              
                      <div className="banner-info">
                          <h5>{item.titre} </h5>
                          <p>{item.description}</p>
                          <p> <Link to={{pathname:"/Plusdetails/"+item.id}} className='btn mt-3'>Plus de détails</Link></p>
                      </div>
                  </div>
                 <div className="col-lg-7 col-md-12 col-12">
                      <div className="imgBox">
                        <img src={`http://localhost:8000/${item.images}`} className="img-fluid" alt="..." />
                      </div>
                </div>
              </div>

            </div>

        </div>
       

       )

    })




  return (
  
    
    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        
    <div className="carousel-indicators">
      <button id='captions' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button id='captions' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button id='captions' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button id='captions' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
   
    <div className="carousel-inner">
   
      <div className="carousel-item active">
         <div className="carousel-caption">
              
              <div className="row" >
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="banner-info">
                        <h5> Bienvenue  <br/> Cabinet Nakay ANTANANARIVO </h5>
                        <p>Notre siège se situe à Avaradoha</p>
                        <p> <Link to={'/Plusdetailsactive'} className='btn mt-3'>Plus de détails</Link></p>
                    </div>
                </div>
               <div className="col-lg-7 col-md-12 col-12">
                    <div className="imgBox">
                      <img src={Fond1} className="img-fluid" alt="..." />
                    </div>
              </div>
            </div>

          </div>
      </div>
      {showallheaders}
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>
  )
}




