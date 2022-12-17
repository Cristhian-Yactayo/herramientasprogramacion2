import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importamos el boostrap para toda la aplicacion
import '../node_modules/bootstrap/dist/css/bootstrap.css'

//se declara una constante con el nombre root que se cargara en el index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//se esta renderizando la aplicacion
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
