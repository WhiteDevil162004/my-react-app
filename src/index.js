import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header/Header';
import Main from './Header/Main';
import Footer from './Header/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Main/>
        <Footer/>
    </React.StrictMode>
);