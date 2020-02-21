import React, { useState, useEffect } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col } from '../styleGrid/grid';
import MonsterIcon from './monster-icon.png'
import '../../teste.css'
import {useParams , Link} from 'react-router-dom'

import { FinalResultContainer , FinalResultCard, Header ,
    InfoHeader, ResultButton } from './styles';

export default function FinalResult(){
        let { allRightQuestions, rightEasyQuestions, rightMediumQuestions,
             rightHardQuestions, wrongEasyQuestions, 
             wrongMediumQuestions, wrongHardQuestions, } = useParams()

    
    return (<div>
        <FinalResultContainer className="hide">
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
                                            <h1>{allRightQuestions}</h1>
                                            
                                            <p>acertos</p>
                                        </Col>

                                        <Col de='6'>
                                            <h1>{10 - allRightQuestions}</h1>
                                            <p>erros</p>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div class="resultDescription2">
                                        <Col de='4'>
                                            <Col de='10'>
                                                <h2>Fácil</h2>
                                                <p className="resultP">Acertos : {rightEasyQuestions}</p>
                                                <p className="resultP"> Erros: {wrongEasyQuestions}</p>
                                            </Col>
                                            <Col de='2'>
                                                <div className="divisor"></div>
                                            </Col>
                                        </Col>
                                        <Col de='4'>
                                            <Col de='10'>
                                                <h2>Médio</h2>
                                                <p className="resultP">Acertos : {rightMediumQuestions}</p>
                                                <p className="resultP"> Erros: {wrongMediumQuestions}</p>
                                            </Col>
                                            <Col de='2'>
                                                <div className="divisor"></div>
                                            </Col>
                                        </Col>
                                        <Col de='4'>
                                            <h2>Difícil</h2>
                                            <p className="resultP">Acertos : {rightHardQuestions}</p>
                                            <p className="resultP"> Erros: {wrongHardQuestions}</p>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <Link to="/">
                                    <ResultButton> Voltar ao início</ResultButton>
                                    </Link>
                                </Row>
                            </SectionContainer>
                        </FinalResultCard>
                    </Row>
                </SectionContainer>
            </Container>
        </FinalResultContainer>
    </div>)
  }

