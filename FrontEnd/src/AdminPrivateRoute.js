import React , {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {Navigate } from 'react-router-dom';
import axios from 'axios'; 
import ContenuAdmin from './Pages/Admin/ContenuAdmin';



function AdminPrivateRoute({...rest}) {

 const [Authenticated, setAuthenticated] = useState(false);
 const [Loading, setLoading] = useState(true);
 useEffect(()   =>  {
    
     axios.get('/api/checkingAthenticated').then( res  => {
        if(res.status === 200){
          setAuthenticated(true);
        }

     });

     return ()  => {
         setAuthenticated(false);
     };

 }, []);

 if(Loading)
 {
   return  <h5 id='infoplus'>Loading</h5>
 }
  
    return (
  
     
        
          
        <Route   {...rest}
        render={  ({props, location})  =>
             Authenticated ?
           (   <ContenuAdmin  {...props} /> ) :
           (   <Navigate  to={{pathname: "/Login", state: {from: location} }}/> ) 
       
        }
       
        />
           
     
     
     
    
    );
  };
  
  export default AdminPrivateRoute;
  