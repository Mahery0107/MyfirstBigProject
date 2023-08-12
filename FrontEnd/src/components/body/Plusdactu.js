import React, { useEffect, useState } from 'react';
import NavBar from '../Navigation/NavBar';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './plusdactu.css'
import swal from 'sweetalert';
import { useUser } from '../UserContext';

const Plusdactu = () => {

    const [comments, setComments] = useState({
      
        content: "",
});
    const [commentlist, setComs] = useState([]);
    const [likelist, setLike] = useState([]);
    const [inputs, setInputs] = useState({});
    const {id} = useParams();
    const { user } = useUser();
   
     
    useEffect(()=>
       { 
            fetchAllActus();
            fetchGetComs() ;
            fetchGetLikes() ;

      

       },[]);
       
       const  fetchGetComs = () =>
       {
          axios.get('api/get-comments/'+id).then(res => 
            {
                if(res.data.status === 200)
                {
                    setComs(res.data.comments);
                }
            });
       }
       
       const   fetchGetLikes = ()=>
       {
            
        axios.get('api/get_likes/'+id).then(res => 
            {
                if(res.data.status === 200)
                {
                    setLike(res.data.likes);
                }
            })
       }

    const  fetchAllActus = ()=>
     {
            axios.get('/api/edit-actus/'+id).then(res =>
              {
                  setInputs(res.data.actus);
              });
       }
      
      
    const handleSubmit = (e) => 
      {
          e.preventDefault();

          const formdata = new FormData();
 
          formdata.append('actu_id',id);
          formdata.append('content',comments.content);

          axios.post('api/add-coments', formdata).then(res  => 
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

         
        axios.post('api/likes_actus/'+id).then(res =>
            {
                if(res.data.status === 200)
                {
                    fetchGetLikes();
                }
            })
    }
    const deletecoms = (e, id) =>{
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting" ;

        axios.delete(`/api/delete-comms/${id}`)
        .then(res=>{
            if(res.data.status === 200)
            {
              
                fetchGetComs() ;
              
            }
            else if(res.data.status === 404)
            {
                swal('Error',res.data.message,"error");
                thisClicked.innerText = "Delete" ;
            }
        });
    }
  
    return (
        <div className='actus_body'>
                  <NavBar />   
           
              <div className='body-plusd-evenements'>
                  <div className='plusd-evenements-left'>
                      <div class="card evenement_cards" >
                        <img src={`http://localhost:8000/${inputs.videos}`}  class="card-img-top"  />
                              <div class="card-body">
                                <button onClick={submitLikes}  class="btn btn-secondary">{likelist.length}<i class="fa-solid fa-heart"></i></button>
                                <a href="#" class="btn btn-secondary">{commentlist.length}<i class="fa-solid fa-comments"></i></a>
                           
                              </div>
                      </div>
                    
                  </div>
                  <div className='plusd-evenements-right'>
                       <div className='titres_content'>
                            <h5 id='infosplus'>{inputs.titres} </h5>
                            <p style={{wordWrap: 'break-word'}}>{inputs.extraits} </p>
                            <p style={{wordWrap: 'break-word'}}>{inputs.descriptions} </p>
                        </div>
                        <div  className='coments_content'>
                            <h2 id='coms-title'>Commentaires: </h2>
                             
                            {commentlist.map((i)=>{
                                return( <div className='comments_content'>
                                    <h1 className='auteur'>{i.user.name}</h1>
                                    <div className='flex_menu'>
                                        
                                        <div>
                                          <p>{i.contents}</p>
                                        </div>  


                                        <div class="dropdown">
                                                    <span  id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis"></i>
                                                    </span>
                                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                        <li><Link to={{pathname:"/admin/Modifier2/"+i.id }} className="dropdown-item" >Modifier</Link></li>
                                                        <li onClick={(e)=> deletecoms(e, i.id)} ><Link className="dropdown-item" to="#!">supprimer</Link></li>
                                                    
                                                    </ul>
                                        </div>

                                  
                                  
                                   
                                    </div>
                                   
                                  
                                </div>);
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
                                     <label>
                                    <button type="submit" className='btn btn-success bouton_coms'><i class="fa-solid fa-paper-plane"></i></button>
                                    </label>
                                
                             
                            </form>
                   
                  </div>
              </div>
                
        </div>
    );
};

export default Plusdactu;