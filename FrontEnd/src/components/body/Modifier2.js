import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Modifier2 = () => {
    const [comsInput, setComs] = useState({});
    const navigate = useNavigate() ;
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(() =>{  
       fetchAllComs();
       fetchAllActus();
         },[]);

     const  fetchAllComs = () =>
     {

         axios.get('/api/edit_actus_coms/'+id).then(res =>{
             setComs({
                 comments: res.data.coms.contents,
                 actualites: res.data.coms.actu_id,
             });

         } )

     }
     console.log(comsInput);
     const  fetchAllActus = ()=>
     {
            axios.get('/api/edit-actus/'+id).then(res =>
              {
                  setInputs(res.data.actus);
              });
       }
      

     const handleInput = (e) =>{  
         e.persist();
         setComs({...comsInput,[ e.target.name]: e.target.value});
     }

     const submitForm = (e) => {
        console.log(comsInput);
         e.preventDefault();
          axios.put('/api/update_actu_coms/'+id,comsInput).then((res)=>{
             if(res.data.status === 200){
                 swal('Réussi',res.data.message,'success');
              
                 navigate('/Plusdev/'+comsInput.actualites);
            
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

export default Modifier2;