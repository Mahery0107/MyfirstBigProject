import axios from 'axios';
import React, { useContext, useEffect } from 'react';

const UserContext = React.createContext();

export function UserProvider(props) {
  const [user, setUser] = React.useState({});
useEffect(() =>
{
       axios.get('api/whoami').then(res => 
        {
          setUser({...user, data : res.data.user}) 
        })
},[])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUser() {
    return useContext(UserContext)
}
