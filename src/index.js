import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

