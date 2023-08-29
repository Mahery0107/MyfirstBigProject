import React, {useEffect, useState} from 'react';
import FooterAdmin from './FooterAdmin';
import NavBarAdmin from './NavBarAdmin' ;
import SideBarAdmin from './SideBarAdmin';
import {Route, Switch, Redirect, Link, useParams} from 'react-router-dom'
import './contenuadmin.css'
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts' ;
import routes from '../../routes/routes';
import axios from 'axios';
import swal from 'sweetalert';
const ContenuAdmin = () => {
      const {id} = useParams();
    const [headers,setHeaders] = useState([]);
    const [evenments,setEvenments] = useState([]);
    const [actus,setActus] = useState([]);
    const [offres,setOffre] = useState([]);
    const [views,setViews] = useState([]);
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{ 
        fetchAllHeaders();
  
        fetchAllEvenments();
        fetchAllActus();
        fetchAllOffres();
        fetchViews();
        fetchAllUsers();
    },[]);

    const     fetchViews = () => {
          axios.get('api/viewsCount').then(res =>{
            setViews(res.data.compte);
          })
    }
   const  fetchAllUsers= () => {
        axios.get('api/allUsers').then(res =>{
            setUsers(res.data.utilisateurs);
        })
  }
 //console.log(users.length);
    const   fetchAllActus = () => {
        setLoading(true) 
        axios.get('/api/actualités')
        .then(res=>{
            setActus (res.data);
        })
        .finally(() =>setLoading(false))
      }
    const  fetchAllEvenments = () => {
        setLoading(true) 
        axios.get('/api/evenments')
        .then(res=>{
            setEvenments (res.data);
        })
        .finally(() =>setLoading(false))
      }
    const  fetchAllHeaders = () =>{
        setLoading(true) 
        axios.get('/api/sliders')
        .then(res=>{
            setHeaders (res.data);
        })
        .finally(() =>setLoading(false))
    }
    const   fetchAllOffres = () =>{
        setLoading(true) 
        axios.get('/api/offres')
        .then(res=>{
            setOffre (res.data);
        })
        .finally(() =>setLoading(false))
    }
  
    const deleteEvenment = (e, id) =>{
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting" ;

        axios.delete(`/api/delete-Evenment/${id}`)
        .then(res=>{
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal('Error',res.data.message,"error");
                thisClicked.innerText = "Delete" ;
            }
        });
       
    }
  const    deleteActus  = (e, id) =>{

        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting" ;

        axios.delete(`/api/delete_actus/${id}`)
        .then(res=>{
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal('Error',res.data.message,"error");
                thisClicked.innerText = "Delete" ;
            }
        });
       
    }
    const deleteHeader = (e, id) =>{
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting" ;

        axios.delete(`/api/delete-slider/${id}`)
        .then(res=>{
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal('Error',res.data.message,"error");
                thisClicked.innerText = "Delete" ;
            }
        });
       
    }
    const  deleteOffre = (e, offre_id) =>{
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting" ;

        console.log(offre_id );
        axios.delete(`/api/delete_offre/${offre_id}`)
        .then(res=>{
            if(res.data.status === 200)
            {
                swal('Success',res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal('Error',res.data.message,"error");
                thisClicked.innerText = "Delete" ;
            }
        });
       
    }
   
    return (
        <div className='sb-nav-fixed'>
             <NavBarAdmin />
             <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                   <SideBarAdmin />
                </div>
                <div id="layoutSidenav_content">
                  <main> 
                  <div className='nombres'>
                        <div className='blue'>
                            <i class="fa-solid fa-eye"></i>
                            <h2>Visiteurs</h2>
                                
                            <p>{views.vues}</p> 
                        </div>
                        <div className='green'>
                            <i class="fa-solid fa-users"></i>
                            <h2>Utilisateurs</h2>
                                
                            <p>{users.length}</p> 
                        </div>
                  </div>
                 
                        <h1 id='title-head'>-----------------------HEADER LIST-----------------------</h1>
                        <div className='carte_apropos2 scroller' >
                           <table className="table table-bordered table-responsive table-striped ">
                                <thead className="thed">
                                        <tr>
                                            <th>Id</th>
                                            <th>Nom</th>
                                            <th>Titres</th>
                                            <th>Déscriptions</th> 
                                            <th>Images</th>
                                         
                                            <th> Action </th>
                                        </tr>
                                </thead>
                                
                                <tbody>
                                
                                    {loading ? <div>Loading...</div>  : headers.map((header,index)=>(
                                        <tr key={header.id}>

                                            <td>{++index}</td>
                                            <td>{header.nom}</td>
                                            <td>{header.titre}</td>
                                            <td>{header.description}</td>
                                            <td>{header.images}</td>
                                  
                                            <td>
                                        
                                           
                                            <button type="button" onClick={ (e) => deleteHeader(e, header.id) } className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            
                            </table>
                        </div>
                        <h1 id='title-head'>-----------------------OFFERS LIST-----------------------</h1>
                        <div className='carte_apropos3 scroller' >
                           <table className="table table-bordered table-responsive table-striped">
                                <thead className="thed">
                                        <tr>
                                            <th>Id</th>
                                            <th>Offres</th>
                                            <th>Titres</th>
                                            <th>Déscriptions</th> 
                                            <th>composants</th>
                                         
                                            <th> Action </th>
                                        </tr>
                                </thead>
                                
                                <tbody>
                                
                                    {loading ? <div>Loading...</div>  : offres.map((offre,index)=>(
                                        <tr key={offre.offre_id}>
                                            
                                            <td>{++index}</td>
                                            <td>{offre.nom_offres}</td>
                                            <td>{offre.entite_id}</td>
                                            <td>{offre.description_id}</td>
                                            <td>{offre.composant_id}</td>
                                             
                                            <td>
                                            <Link to={{pathname:"/admin/ModifierOffre/"+offre.id }} className='btn btn-secondary'><i class="fa-solid fa-pen-to-square"></i></Link>
                                        
                                            <button type="button" onClick={(e)=>{deleteOffre(e, offre.id)}} className='btn btn-danger delete'><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            
                            </table>
                        </div>
                        <h1 id='title-head'>-----------------------EVENMENTS LIST-----------------------</h1>
                        <div className='carte_apropos4 scroller' >
                           <table className="table table-bordered table-responsive table-striped">
                                <thead className="thed">
                                        <tr>
                                            <th>Id</th>
                                            <th>Titres</th>
                                            <th>Déscriptions</th> 
                                            <th>Images</th>
                                       
                                            <th> Action  </th>
                                        </tr>
                                </thead>
                                
                                <tbody>
                                
                                    {loading ? <div>Loading...</div>  : evenments.map((evenment,index)=>(
                                        <tr key={evenment.id}>

                                            <td>{++index}</td>
                                            <td>{evenment.titres}</td>
                                            <td>{evenment.descriptions}</td>
                                            <td>{evenment.video}</td>
                                      
                                  
                                            <td>
                                          
                                           
                                            <button type="button" onClick={(e)=> deleteEvenment(e, evenment.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            
                            </table>
                        </div>

                        <h1 id='title-head'>-----------------------ACTUS LIST-----------------------</h1>
                        <div className='carte_apropos4 scroller' >
                           <table className="table table-bordered table-responsive table-striped">
                                <thead className="thed">
                                        <tr>
                                            <th>Id</th>
                                            <th>Titres</th>
                                            <th>Déscriptions</th> 
                                            <th>Images</th>
                                       
                                            <th> Action  </th>
                                        </tr>
                                </thead>
                                
                                <tbody>
                                
                                    {loading ? <div>Loading...</div>  : actus.map((actu,index)=>(
                                        <tr key={actu.id}>

                                            <td>{++index}</td>
                                            <td>{actu.titres}</td>
                                            <td>{actu.descriptions}</td>
                                            <td>{actu.videos}</td>
                                      
                                  
                                            <td>
                                          
                                           
                                            <button type="button" onClick={(e)=> deleteActus(e, actu.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            
                            </table>
                        </div>
                   </main>

                  <FooterAdmin />
                </div>
             </div>
        </div>
    );
};

export default ContenuAdmin;