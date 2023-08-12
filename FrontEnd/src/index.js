import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { UserProvider } from './components/UserContext';
import axios from 'axios';


// axios.interceptors.request()

/*App.listen(3000,() => {
  console.log('server on port 3000');
})*/
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
         <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
