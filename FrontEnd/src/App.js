
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Actualites from './components/body/Actualites';
import Plusdevenments from './components/body/Plusdevenments';
import Plusdetails from './components/header/Plusdetails';
import Voirplus from './components/header/Voirplus';
import ProtectedRoute from './ProtectedRoute';
import Apropos from './Pages/About/Apropos';
import ContenuAdmin from './Pages/Admin/ContenuAdmin';
import Login from './Pages/conection/Login';
import Registre from './Pages/conection/Registre';
import Historic from './Pages/History/Historic';
import Intro from "./Pages/Home/Intro";
import axios from 'axios' ;
import AdminPrivateRoute from './AdminPrivateRoute';
import { Switch } from '@material-ui/core';
import AjoutHeader from './Pages/Admin/Ajout/AjoutHeader';
import AjoutOffre from './Pages/Admin/Ajout/AjoutOffre';
import AjoutEvnmt from './Pages/Admin/Ajout/AjoutEvnmt';
import Voirheader from './Pages/Admin/Voirs/Voirheader';
import Edit from './Pages/Admin/Modifier/Edit';
import AjoutComposant from './Pages/Admin/Ajout/AjoutComposant';
import AjoutDescription from './Pages/Admin/Ajout/AjoutDescription';
import AjoutEntité from './Pages/Admin/Ajout/AjoutEntité';
import Editevenmt from './Pages/Admin/Modifier/Editevenmt';
import { useEffect, useState } from 'react';
import Info1 from './components/body/Info1';
import InfoCn from './components/body/InfoCn';
import AjoutPrixFormation from './Pages/Admin/Ajout/AjoutPrixFormation';
import Ajoutprixservice from './Pages/Admin/Ajout/Ajoutprixservice';
import An from './Pages/About/An';
import Manao from './Pages/About/Manao';
import Ise from './Pages/About/Ise';
import Editoffer from './Pages/Admin/Modifier/Editoffer';
import Ajoutactus from './Pages/Admin/Ajout/Ajoutactus';
import Plusdactu from './components/body/Plusdactu';
import Plusdetailsactive from './components/header/Plusdetailsactive';
import Modifier1 from './components/body/Modifier1';
import './App.css'
import Modifier2 from './components/body/Modifier2';
import Organigramme from './Pages/About/Organigramme';
import Ajoutprixautres from './Pages/Admin/Ajout/Ajoutprixautres';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000" ;
axios.defaults.headers.post['Content-Type'] = 'application/json' ;
axios.defaults.headers.post['Accept'] = 'application/json' ;

axios.interceptors.request.use(function (config){
 const token = localStorage.getItem('auth_token');
 config.headers.Authorization = token ? `Bearer ${token}` : '' ;
 return config;
});



function App() {
  useEffect( ()=> {
          axios.post('/api/views_pages').then(res => {
             
          } )
  },[])
  return (

   //ato ny miantso anle api
   <div className='app'>
         
         <Router>
            <Routes>
              
                   <Route path='/admin' element={ 
                     <ProtectedRoute> 
                        <ContenuAdmin/>
                     </ProtectedRoute> } 
                     
                     />
                          <Route path='/admin/AjoutHead' element={<AjoutHeader />} />
                          <Route path='/admin/AjoutOffre' element={<AjoutOffre />} />
                     
                          <Route path='/admin/AjoutDescri' element={<AjoutDescription />} />
                          <Route path='/admin/AjoutEntité' element={<AjoutEntité />} />
                          <Route path='/admin/AjoutComposant' element={<AjoutComposant />} />
                          <Route path='/admin/AjoutPrixFormation' element={<AjoutPrixFormation />} />
                          <Route path='/admin/AjoutPrixService' element={<Ajoutprixservice/>} />
                          <Route path='/admin/AjoutPrixautres' element={<Ajoutprixautres/>} />
                          <Route path='/admin/AjoutEvenmt' element={<AjoutEvnmt />} />
                          <Route path='/admin/Ajoutplusactus' element={<Ajoutactus />} />
                          <Route path='/admin/Modifier/:id' element={<Edit />} />
                          <Route path='/admin/Modifier1/:id' element={<Modifier1 />} />
                          <Route path='/admin/Modifier2/:id' element={<Modifier2 />} />
                          <Route path='/admin/ModifierEvenmt/:id' element={<Editevenmt />} />
                          <Route path='/admin/ModifierOffre/:offre_id' element={<Editoffer />} />
                  
                     <Route path='/' element={<Intro />} />
                            <Route path='/Plusdetails/:id' element={<Plusdetails />} />
                            <Route path='/Voirplus/:nom_offres' element={<Voirplus />} />
                            <Route path='/Plusdetailsactive' element={<Plusdetailsactive />} />
                            <Route path='/Plusdev/:id' element={<Plusdevenments />} />
                            <Route path='/Plusdactu' element={<Actualites />} />
                            <Route path='/Plusdactus/:id' element={<Plusdactu />} />
                     <Route path='/Infos/contact' element={<Apropos />} />
                              <Route path='/Infos' element={<Info1 />} />
                              <Route path='/Infos/PrixCn' element={<InfoCn />} />
                              <Route path='/Infos/Association' element={<An />} />
                              <Route path='/Infos/Ise' element={<Ise />} />
                              <Route path='/Infos/Manao' element={<Manao />} />
                              <Route path='/Infos/Organigramme' element={<Organigramme />} />
                      <Route path='/Login'  element={<Login />}   />
                      <Route path='/Registre'   element={<Registre />}  />
                     
                     <Route path='/History' element={<Historic />} />

            </Routes>
         </Router>
        
    
      
        
   
   
   
   
   </div>
  );
};

export default App;
