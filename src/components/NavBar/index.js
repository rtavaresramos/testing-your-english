import React, { Component } from 'react';
import { Div , NavBrand } from './styles';
import { Row } from '../styleGrid/base';

export default class NavBar extends Component {
  render() {
    return (
            <Div>
                <Row>
                    <NavBrand>Teste Dev Frontend</NavBrand>
                </Row>
            </Div>
    )
  }
}
