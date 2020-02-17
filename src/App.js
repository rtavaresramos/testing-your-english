import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Question from './components/Question';
import HomeContent from './components/HomeContent';

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return <div>
        <NavBar/>
        {/* <HomeContent/> */}
        <Question/>
    </div>
  }
}
