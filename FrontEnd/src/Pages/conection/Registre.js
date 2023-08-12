import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react' 
import './registre.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom' ;
import swal from 'sweetalert' ;


export default function Registre() {
   
   const [registerInput, setRegister] = useState({  
      name: "",
      email: "",
      password: "",
      role: "",
      error_list: [],
    });
      const navigate = useNavigate() ;


 const handleInput = (e) => {
    e.persist();
    setRegister({...registerInput, [e.target.name]: e.target.value   });

 }

    
    const registerSubmit = (e) => {
        e.preventDefault();  

          const  data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            role: 'user',
          }
          axios.get('/sanctum/csrf-cookie').then(response => {
           axios.post('/api/register', data).then(res  =>{
               if(res.data.status === 200){
                   localStorage.setItem('auth_token', res.data.token);
                   localStorage.setItem('auth_name', res.data.username);
                   swal("Réussi",res.data.message,"success");
                   navigate('/Login');

               }
               else
               {
                setRegister({...registerInput, error_list: res.data.validation_errors   });
               }
             });
        });
         

    } 

  return (
   

      <div className='login_body'> 
            <div className='register-box'>
                <form  onSubmit={registerSubmit}>
                  <h2 className='login_title'><i class="fa-solid fa-user"></i></h2>
                    <div class="input-box">
                     
                        <input type="text" required name='name' onChange={handleInput} value={registerInput.name}   />
                        <label>Nom et Prénom</label>
                    </div>
                   
                   
                    <div class="input-box">
                      
                        <input type="email" required name='email' onChange={handleInput} value={registerInput.email}    />
                        <label>Adresse email</label>
                    </div>
                    {/* <div class="input-box">
                      
                        <input type="text" required name='role' onChange={handleInput}  value={registerInput.role}   />
                        <label>Role</label>
                    </div> */}
                    <div class="input-box">
                      
                        <input type="password"  required  name='password' onChange={handleInput} value={registerInput.password}   />
                        <label >Mot de passe</label>
                    </div>
                    <button type="submit" className="btn_reg">Créer</button> 
                 
                  
                </form>
             </div>
      </div>
  )
} 



