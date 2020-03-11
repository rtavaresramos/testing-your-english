import React, { Component } from 'react';
import { Div , NavBrand } from './styles';
import { Row } from '../styleGrid/base';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
            <Div>
                <Row>
                    <Link to="/" className="link"><NavBrand>Test your English</NavBrand></Link>
                </Row>
            </Div>
    )
  }
}
