import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import {GlobalStyle} from './styles/global';





 class App extends Component {
  render() {
    return <div>
            <GlobalStyle/>
                <NavBar/>


    </div>

  }
}
export default App
