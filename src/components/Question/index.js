import React, { Component } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col, SectionCol } from '../styleGrid/grid';
import { QuestionContainer, QuestionCard } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../teste.css'

export default class Question extends Component {
  render() {
    return (<div>

        <QuestionContainer>
            <SectionContainer>
                <Row>
                    <Col de='12'>
                        <Row>
                            <Col de='6' className="start">
                                <h1>
                                    História
                                </h1>
                            </Col>
                            <Col de='6' className="end"> 
                                <a href="#">
                                    <span>
                                    <i className="far fa-times-circle"></i>
                                    </span>
                                    Fechar
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </SectionContainer>
            <SectionContainer>
                <QuestionCard>

                </QuestionCard>
            </SectionContainer>
        </QuestionContainer>

    </div>)
  }
}
