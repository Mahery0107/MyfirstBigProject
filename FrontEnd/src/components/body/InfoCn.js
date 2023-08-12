import React, { useEffect, useState } from 'react';
import NavBar from '../Navigation/NavBar';
import axios from 'axios';
import './info1.css'
import { Link } from 'react-router-dom';

const InfoCn = () => {
    const [prices, setPrice] = useState([]);
    const [priceservice, setService] = useState([]);
    const [priceother, setOther] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>
    { 
        fetchAllPrice();
        fetchAllPriceService();
        fetchAllPriceOther();
    },[]);
 
    const  fetchAllPrice = () =>
    {    
        setLoading(true);
        axios.get('api/prices').then(res => 
            {
              setPrice(res.data);
            }).finally(()  => {setLoading(false);})
    }
    const  fetchAllPriceService = () =>
    {    
        setLoading(true);
        axios.get('api/services').then(res => 
            {
                setService(res.data);
            }).finally(()  => {setLoading(false);})
    }
         
    const  fetchAllPriceOther = () =>
    {    
        setLoading(true);
        axios.get('api/others').then(res => 
            {
                setOther(res.data);
            }).finally(()  => {setLoading(false);})
    }


    return (
        <div className='cn-body'>
           <NavBar />
           <h3 className='voir-titles'>  Voici les tarifs pour les offres du cabinet</h3>
           
        
           <p className='pargraphe2'>- Prix Formations:</p>
                <div className='carte_apropos2 scroller' >
                            <table className="table table-bordered table-responsive  table-striped ">
                                    <thead className="thed">
                                            <tr>
                                               
                                                <th>Designation</th>
                                                <th>Niveau</th>
                                                <th>Prix(en Ariary)</th> 
                                            
                                            
                                            
                                            </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        {loading ? <div>Loading...</div>  : prices.map((price,index)=>(
                                            <tr key={price.id}>

                                             
                                                <td>{price.designation}</td>
                                                <td>{price.Niveau}</td>
                                                <td>{price.Prix}</td>
                                        
                                            
                                            
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                
                                </table>
                </div>
            <p className='pargraphe2'>- Préstation Services et Externalisations:</p>
                <div className='carte_apropos2 scroller' >
                            <table className="table table-bordered table-responsive-sm responsive-table table-striped tab ">
                                    <thead className="thed">
                                            <tr>
                                              
                                                <th>Liste des Services</th>
                                                <th>Options</th>
                                                <th>unités</th>
                                                <th>Prix(en Ariary)</th> 
                                            
                                            
                                            
                                            </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        {loading ? <div>Loading...</div>  : priceservice.map((price,index)=>(
                                            <tr key={price.id}>

                                            
                                                <td>{price.services}</td>
                                                <td>{price.options}</td>
                                                <td>{price.unites}</td>
                                                <td>{price.price}</td>
                                        
                                            
                                            
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                
                                </table>
                </div>


                <p className='pargraphe2'>- Prix Autres:</p>
                <div className='carte_apropos2 scroller' >
                            <table className="table table-bordered table-responsive-sm responsive-table table-striped tab ">
                                    <thead className="thed">
                                            <tr>
                                              
                                                <th>Désignation</th>
                                           
                                                <th>Prix(en Ariary)</th> 
                                            
                                            
                                            
                                            </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        {loading ? <div>Loading...</div>  : priceother.map((price,index)=>(
                                            <tr key={price.id}>

                                            
                                                <td>{price.designation}</td>
                                           
                                                <td>{price.price}</td>
                                        
                                            
                                            
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                
                                </table>
                </div>
        </div>
    );
};

export default InfoCn;