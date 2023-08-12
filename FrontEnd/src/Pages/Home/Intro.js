import * as React from 'react';
import './Introcss.css'
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';


import Card from '../../../node_modules/@material-ui/core/Card';
import CardActions from '../../../node_modules/@material-ui/core/CardActions';
import CardContent from '../../../node_modules/@material-ui/core/CardContent';
import CardMedia from '../../../node_modules/@material-ui/core/CardMedia';
import Button from '../../../node_modules/@material-ui/core/Button';
import Typography from '../../../node_modules/@material-ui/core/Typography';
import NavBar from '../../components/Navigation/NavBar';
import Footer from '../../components/Footer/Footer';
import Slides from '../../components/header/Slides';
import Offre from '../../components/body/Offre';
import Evenements from '../../components/body/Evenements';
import {Link} from "react-router-dom"



const Intro = () => {
  
  
    return (
        <div className='home'>
           <NavBar />
           <div className='contenu'>
           <Slides />
           <h1 id='petitTitres'>Nos Offres</h1>
           <hr className='separators' />
           <Offre />
           <h1 id='petitTitre'>Evènements</h1>
           <hr className='separators' />
           <Evenements />
           <Link to={'/Plusdactu'} className='btn btn-primary btn-lg'>Plus d'actualité</Link>
                       
              
           </div>
           <div className='page-foot'>
                <Footer />   
           </div>

           
        </div>
    );
};

export default Intro;