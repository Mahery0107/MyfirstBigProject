import React ,{useState}from 'react';
import './logincss.css'
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom' ;
import swal from 'sweetalert' ;
import { useUser } from '../../components/UserContext';
const Login= () => {

  const [searchParams] = useSearchParams();
  const { setUser } = useUser()
  
     console.log(searchParams.get("target"));

  const navigate = useNavigate() ;

  const [loginInput,setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
        });

  const handleInput = (e)  =>
  {
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value });
  }

  const loginSubmit = (e) => 
  {
      e.preventDefault();  

      const  data = {
      
        email: loginInput.email,
        password: loginInput.password,
           }
     
      axios.get('/sanctum/csrf-cookie').then(res => {
           axios.post('/api/login', data).then(res  =>{
              if(res.data.status === 200)
              {
                
           
                  setUser(res.data);

                  localStorage.setItem('auth_token', res.data.token);
                  localStorage.setItem('auth_name', res.data.username);
                  
             
                  if(searchParams.get("target"))
                  {
                    window.location.href = searchParams.get("target");
                  }
                  else if(res.data.role === 'admin'){
                    navigate('/admin');
                  }


                  else 
                    {
                    navigate('/');
                      }
                  swal("Réussi",res.data.message,"success");
              }
            else if(res.data.status === 401)
            {
              swal("Erreur",res.data.message,"error");
            }
            else
            {
             setLogin({...loginInput, error_list: res.data.validation_errors   });
            }
          })
          .catch(error => {
            console.log(error);
          });
          
     });
   
     

} 
 
    return (
      <div className='login_body'> 
            <div className='login-box'>
                <form  onSubmit={loginSubmit}>
                  <h2 className='login_title'><i class="fa-solid fa-user"></i></h2>
                  <div class="input-box">
                        <span className='icone'><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" required name="email" onChange={handleInput} value={loginInput.email}    />
                        <label>Nom d'utilisateur</label>
                    </div>
                    <div class="input-box">
                        <span className='icone'><i class="fa-solid fa-lock"></i></span>  
                        <input type="password"  required  name="password" onChange={handleInput} value={loginInput.password}  />
                        <label >Mot de passe</label>
                    </div>
                    <button type="submit" className="btn_log">Connecter</button> 
                    <div className='register-link'>
                      <p>Vous avez déja un compte?<Link  className='register'  to={'/Registre'}>        Créer</Link></p> 
                    </div>
                  
                </form>
             </div>
      </div>
  
    ); 
};

export default Login;