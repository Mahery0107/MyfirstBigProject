import React, {useState, useEffect} from 'react';
import './plusdevnments.css'
import NavBar from '../../components/Navigation/NavBar';
import Video4 from "../../sary/DSC_0204.MOV" ;
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../UserContext';
import swal from 'sweetalert';


  
const Plusdevenments = () => {
   
    const { user } = useUser();
    const navigate = useNavigate();
    const [comments, setComments] = useState({
      
        content: "",
});
    const [commentlist, setComs] = useState([]);
    const [likelist, setLikes] = useState([]);
    const [like, setLike]  = useState([0]);
    const [inputs, setInputs] = useState({});
    const {id} = useParams();   
    useEffect(()=>
       { 
            fetchAllEvenments();

            fetchGetComs() ;
            
            fetchGetLikes() ;
       
       },[]);
       const   fetchGetLikes = ()=>
       {
        axios.get('api/get-like/'+id).then(res => 
            {
                if(res.data.status === 200)
                {
                    setLikes(res.data.likes);
                   
                }
            })
       }

       const  fetchGetComs = () =>
       {
        axios.get('api/get-coms/'+id).then(res => 
            {
                if(res.data.status === 200)
                {
                    setComs(res.data.comments);
                }
            });
       }

    const  fetchAllEvenments = ()=>
     {
            axios.get('/api/edit-evenment/'+id).then(res =>
              {
                  setInputs(res.data.evenment);
              });
       }
      
      
    const handleSubmit = (e) => 
      {
          e.preventDefault();

          const formdata = new FormData();
 
          formdata.append('post_id',id);
          formdata.append('content',comments.content);

          axios.post('api/add-coms', formdata).then(res  => 
            {
                if(res.data.status === 200)
                {
                    fetchGetComs() ;
                }
            } )
         
      };
    const handleInput = (e) => {
        e.persist();

        setComments({...comments, [e.target.name]: e.target.value});
    }
    const submitLikes =  (e) =>
    {
        e.preventDefault();


        axios.post('api/add_likes/'+id).then(res =>
            {
                if(res.data.status === 200)
                {
                    fetchGetLikes();

                }
            })
    }

    const deletecomms = (e, id) =>
    {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
       

        axios.delete(`/api/delete-coms/${id}`).then(res=>
            {
                if(res.data.status === 200)
                {
                    swal('Réussi',res.data.message,"success");
                    fetchGetComs() ;
                
                }
                else if(res.data.status === 404)
                {
                    swal('Error',"error");
                
                }
           });
    }
  
  
 
    return (
        <div>
              <NavBar />
              <div className='body-plusd-evenements'>
                  <div className='plusd-evenements-left'>
                      <div class="card evenement_cards">
                        <img src={`http://localhost:8000/${inputs.video}`}  class="card-img-top"  />
                              <div class="card-body">
                                <button onClick={submitLikes}  class="btn btn-secondary">{likelist.length}<i class="fa-solid fa-heart"></i></button>
                                <a href="#" class="btn btn-secondary">{commentlist.length}<i class="fa-solid fa-comments"></i></a>
                           
                              </div>
                      </div>
                    
                    
                  </div>
                  <div className='plusd-evenements-right'>
                       <div className='titres_content'> 
                            <h1 id='evenments_titres'>{inputs.titres} </h1>
                            <p id='paragraph' style={{wordWrap: 'break-word'}}>{inputs.extrait}</p>
                            <p id='paragraph'  style={{wordWrap: 'break-word'}}>{inputs.descriptions} </p>
                        </div>
                     
                        <div className='coments_content'>
                            <h2 id='coms-title'>Commentaires: </h2>
                           
                            {commentlist.map((i)=>{
                                return( 
                                    <div className='comments_content'>
                                        <h1 className='auteur'>{i.user.name}</h1>
                                         <div className='flex_menu'>
                                        
                                            <div className='commentaires'>
                                               <p  style={{wordWrap: 'break-word'}}>{i.content}</p>
                                            </div>  


                                            <div class="dropdown">
                                                        <span  id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </span>
                                                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                            <li><Link to={{pathname:"/admin/Modifier1/"+i.id }} className="dropdown-item" >Modifier</Link></li>
                                                            <li onClick={(e)=> deletecomms(e, i.id)} ><Link className="dropdown-item" to="#!">supprimer</Link></li>
                                                        
                                                        </ul>
                                            </div>

                                      
                                      
                                       
                                        </div>
                                      
                                      
                                      
                                      
                                       
                                   </div>
                                   );
                              })}
                         </div>
                        <form onSubmit={handleSubmit} className='form_coms'>
                              
                                 <input
                                    autoFocus
                                    type="text"
                                    value={comments.content}
                                    name='content'
                                    onChange={handleInput}
                                  />
                                <label for='content'>
                                     <button type="submit" className='btn btn-success bouton_coms'><i class="fa-solid fa-paper-plane"></i></button>
                                </label>
                            
                          
                        </form>   
                          
                      
                   
                  </div>


                  
             </div>
        
        </div>
    );
};

export default Plusdevenments;





