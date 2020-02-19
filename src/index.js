import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';


ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
        <Routes/>
    </BrowserRouter>
    
    , document.getElementById('root'));

