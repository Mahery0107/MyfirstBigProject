import React, { useEffect, useState } from 'react';
import './modifier.css'
import { Link,  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const Modifier1 = () => {
       const [comsInput, setComs] = useState({

       });
       const navigate = useNavigate() ;
       const [inputs, setInputs] = useState({});
        
       const  fetchAllEvenments = ()=>
     {
            axios.get('/api/edit-evenment/'+id).then(res =>
              {
                  setInputs(res.data.evenment);
              });
       }

       const {id} = useParams();

       useEffect(() =>{  
        fetchAllEvenments();
          fetchAllComs();
            },[]);

        const  fetchAllComs = () =>{

            axios.get('/api/edit_comms/'+id).then(res =>{
                setComs({
                    comments: res.data.coms.content,
                    posts: res.data.coms.post_id,
                });

            } )
        }

        const handleInput = (e) =>{  
            e.persist();
            setComs({...comsInput,[ e.target.name]: e.target.value});
        }

        const submitForm = (e) => {
        // console.log(inputs);
            e.preventDefault();
             axios.put('/api/update_coms/'+id , comsInput).then((res)=>{
                if(res.data.status === 200){
                    swal('Réussi',res.data.message,'success');
                    
                    navigate('/Plusdev/'+comsInput.posts);
                }
            
              })
           }

    return (
        <div className='modifier1_body container'>
            <form>
                <div class="mb-3 form_grup">
                
                    <input type="email" name='comments' class="form-control" id="exampleInputEmail1"  onChange={handleInput} value={comsInput.comments || ''}  aria-describedby="emailHelp" />
                
                </div>


                <button onClick={submitForm} type="submit" class="btn btn-danger">Modifier</button>
            </form>
        </div>
    );
};

export default Modifier1;