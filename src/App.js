import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Question from './components/Question';

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return <div>
        <NavBar/>
        <Question/>
    </div>
  }
}
