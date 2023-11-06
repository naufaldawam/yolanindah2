import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Header & Footer
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TopBars from './Components/TopBar/TopBar';

// import carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// botton in index.js
import WhatsappButton from './Components/WhatsappButtons/WhatsappButton';
// import UpBotton from './Components/UpButtons/UpBotton';

// import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopBars/>
    <Header/>
    <App />
    <WhatsappButton/>
    {/* <UpBotton/> */}
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
