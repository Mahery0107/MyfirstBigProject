import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navigation/NavBar';
import "./info1.css"
import Association from '../../sary/AN.jpg'
import Manao from '../../sary/manao.png'
import Ise from '../../sary/LOGO ISE JPG2.jpg'
const Info1 = () => {
    return (
        <div className='info1-body'>
               <NavBar />
              
              
                <div class="container infos">
                    <div className='info_left'> 
                       
      <h1 class="i_title"><span class="c1">CABINET</span><span class="t2">NAKAY</span></h1>  
                         
                            <div className='boutons'>  
                              <Link to={'/Infos/PrixCn'}><button className='btns btn-secondary'> Prix CN</button></Link>  
                              <Link to={'/Infos/contact'}> <button className='btns btn-secondary'>Contact</button></Link> 
                              <Link to={'/Infos/Organigramme'}> <a id='btons' className='btn btn-secondary '>Organigramme</a></Link>
                            </div> 
                       
                    </div>
                    <div className='info_right'> 
                      <h3 className='i_title t2'>PARTENARIATS</h3>   
                       <div className='partenaires'>  
                          <Link to={'/Infos/Association'}><img className='img_an' src={Association} /> </Link> 
                          <Link to={'/Infos/Manao'}><img className='img_an' src={Manao} /> </Link> 
                          <Link to={'/Infos/Ise'}><img className='img_an' src={Ise} /> </Link> 
                      
                       </div>        
                    </div>
                
 
                </div>
        </div>

    );
};

export default Info1;