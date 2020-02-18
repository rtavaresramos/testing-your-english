import React, { Component } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col } from '../styleGrid/grid';
import MonsterIcon from './monster-icon.png'
import '../../teste.css'

import { FinalResultContainer , FinalResultCard, Header ,
    InfoHeader, ResultButton } from './styles';

export default class FinalResult extends Component {
  render() {
    return (<div>
        <FinalResultContainer>
            <Container>
                <SectionContainer>
                    <Row>
                        <FinalResultCard>
                            <Header>
                                <Row>
                                    <img src={MonsterIcon} alt=""/>
                                    <h1>Parabéns!</h1>
                                    <h2>Você finalizou o teste</h2>
                                </Row>
                                <Row>
                                    <InfoHeader>
                                        <h1>Veja seu desependo nas questões</h1>
                                    </InfoHeader>
                                </Row>
                            </Header>
                            <SectionContainer>
                                <Row>
                                    <div className="resultDescription1">
                                        <Col de='6'>
                                            <h1>7</h1>
                                            
                                            <p>acertos</p>
                                        </Col>
                                        {/* <span className="divisor"></span> */}
                                        <Col de='6'>
                                            <h1>3</h1>
                                            <p>erros</p>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div class="resultDescription2">
                                        <Col de='4'>
                                            <Col de='10'>
                                                <h2>Fácil</h2>
                                                <p className="resultP">Acertos : 2</p>
                                                <p className="resultP"> Erros: 1</p>
                                            </Col>
                                            <Col de='2'>
                                                <div className="divisor"></div>
                                            </Col>
                                        </Col>
                                        <Col de='4'>
                                            <Col de='10'>
                                                <h2>Fácil</h2>
                                                <p className="resultP">Acertos : 2</p>
                                                <p className="resultP">Erros: 1</p>
                                            </Col>
                                            <Col de='2'>
                                                <div className="divisor"></div>
                                            </Col>
                                        </Col>
                                        <Col de='4'>
                                            <h2>Fácil</h2>
                                            <p className="resultP">Acertos : 2</p>
                                            <p className="resultP">Erros: 1</p>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <ResultButton> Voltar ao início</ResultButton>
                                </Row>
                            </SectionContainer>
                        </FinalResultCard>
                    </Row>
                </SectionContainer>
            </Container>
        </FinalResultContainer>
    </div>)
  }
}
