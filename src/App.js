import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Question from './components/Question';
import HomeContent from './components/HomeContent';
import ModalResult from './components/ModalResult/WrongAnswer';
import FinalResult from './components/FinalResult';

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return <div>
        <NavBar/>
        {/* <HomeContent/> */}
        <Question/>
        {/* <ModalResult/> */}
        {/* <FinalResult/> */}
    </div>
  }
}
