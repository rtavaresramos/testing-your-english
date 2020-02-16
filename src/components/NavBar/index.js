import React, { Component } from 'react';

import {Nav, NavBrand} from './styles.js'

export default class NavBar extends Component {
  render() {
    return <div>
        <nav>
            <Nav>
                <NavBrand>Teste Dev Frontend</NavBrand>
            </Nav>
        </nav>
    </div>;
  }
}
