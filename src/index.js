import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
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
=======
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
>>>>>>> 35c187726025b82c78601fe7c99a5f2955fde41c
