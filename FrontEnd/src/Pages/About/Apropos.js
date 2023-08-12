

import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/NavBar';
import { Link } from 'react-router-dom';
import './Apropocss.css'
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';
import swal from 'sweetalert';

const Apropos  = () =>  {
  



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ayqrkxy', 'template_oq0jxjn', e.target, 'Y7n_JxTR4bnrToW9O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  
    return (
        <div className='about-body'>
              <NavBar />
              <h3 className='voir-titles'> Contactez-nous</h3>
              <div className='groupes'>
                <form className='formulaire' onSubmit={sendEmail}>
                  <div className='contact_name'>
                    <div class="input-box">
                        <input type="text" name="name"  id="Email1" aria-describedby="emailHelp" placeholder="Entrer votre nom" />
                        <input type="email" name="email"    id="Email1" aria-describedby="emailHelp" placeholder="Entrer votre email" />
                        
                    </div>
                    <div class="input-box">
                      <input type="text" name="subject"  id="Email1" aria-describedby="emailHelp" placeholder="Entrer le sujet" />
                     
                    </div>
                  </div>
                  <textarea name="message"  id="" cols="30" rows="10" aria-describedby="emailHelp" placeholder="votre message"></textarea> 
                   <input type="submit" value="Envoyer" className="btn  btn-primary" />
                   
                  
                 
                </form>

              </div>
            

              <Footer />   
        </div>
    );

};

export default Apropos;



