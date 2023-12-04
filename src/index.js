import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@material-tailwind/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App />
   </React.StrictMode>
);

reportWebVitals();
=======
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './css/animate.css';
import './css/common.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 94269223b376e217fcc927f5e44386e55d029069
