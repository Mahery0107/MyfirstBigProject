import React, {useEffect, useState} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './evenements.css'
import { Link, Navigate, useNavigate, createSearchParams, useParams } from 'react-router-dom';

import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { Pagination } from "swiper";

export default function Evenements () {
  


    const navigate = useNavigate() ;

    const [evenementInput, setEvenment] = useState([]);

    useEffect(() => 
    {
       axios.get('/api/get-evenment').then(res =>
        {
           
         if(res.data.status === 200)
           {
             // console.log(res.data.header);
             setEvenment(res.data.header);
            
           }
      
         
        })
        });
      
        
    
    const gotocoment =  (e,id) => 
    {
        e.preventDefault(); 
        if(localStorage.getItem('auth_token'))
         {   
            navigate('/Plusdev/'+id);

         }
        else 
         {
         
            navigate({
                pathname : '/Login' ,
              //  search : `?target=${window.origin}/Plusdev`
              search : `?${createSearchParams({target:`${window.origin}/Plusdev/`+id})}`
            });
         }
    }
    const  gotodetails =  (e,id) => 
    {
        e.preventDefault(); 
        if(localStorage.getItem('auth_token'))
         {   
            navigate('/Plusdev/'+id);

         }
        else 
         {
         
            navigate({
                pathname : '/Login' ,
              //  search : `?target=${window.origin}/Plusdev`
              search : `?${createSearchParams({target:`${window.origin}/Plusdev/`+id})}`
            });
         }
    }
   
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
     
    };


 



    return (
        
        <div className = 'body-evenments'>
      
           <Slider {...settings} >
          {
            evenementInput.map((item, idx) => {
              return (

     
                <div className='carde '>
             <div className='image-content'>
                     <span className='overlay'></span>

                     <div className='card-image'>
                     <img src={`http://localhost:8000/${item.video}`}  className='card-img' />
                     </div>
             </div>
                     
             <div className='card-content'>
                 <p className='descriptions'>{item.extrait}</p> 
                 <Link onClick={e => gotocoment(e, item.id)} className='btn btn-success btn-sm'> <i class="fas fa-cart-shopping"></i>Commenter</Link>
                        
             </div>
        </div>
   
        
       )
    })
          } 
       
            </Slider>
      
      </div>
   
      
    );
};


