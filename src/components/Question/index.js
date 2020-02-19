import React, { useEffect, useState } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col } from '../styleGrid/grid';
import { QuestionContainer, QuestionCard , 
        QuestionHeader , QuestionOption , 
        QuestionAswer, AnswerButton} from './styles';
import '../../teste.css'

function Question(){

    const [question, setQuestion] = useState([])

    useEffect(() => {
        async function loadQuestions() {
            const response = await fetch('https://api.myjson.com/bins/1b9kgc');
            const data  = await response.json();

            let categories = [];

            data.forEach( question => {
                if ( !categories.includes(question.category) ) { categories.push(question.category) }
            } );

        }
        loadQuestions()
     }, [])

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
                    <QuestionHeader>
                        <Container>
                            <Row>
                                <Col de='6'>
                                    <h1> Questão 1</h1>
                                </Col>
                                <Col de='6'>
                                    <div className="questionLevel">
                                        <h2> 
                                            <span>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </span>
                                            Difícil    
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <p>Sobre a conhecida Idade dos Metais, na transição entre 
                                    a Pré-História e a História, é possível afirmar que:</p>
                            </Row>
                        </Container>
                    </QuestionHeader>
                    <QuestionAswer>
                            <QuestionOption>
                                <p>não existe ligação entre o uso dos metais e a formação de grandes impérios</p>
                            </QuestionOption>

                            <QuestionOption>
                                <p>não existe ligação entre o uso dos metais e a formação de grandes impérios</p>
                            </QuestionOption>

                            <QuestionOption>
                                <p>não existe ligação entre o uso dos metais e a formação de grandes impérios</p>
                            </QuestionOption>

                            <QuestionOption>
                                <p>não existe ligação entre o uso dos metais e a formação de grandes impérios</p>
                            </QuestionOption>
                            <AnswerButton>
                                Responda
                            </AnswerButton>
                        </QuestionAswer>
                </QuestionCard>
            </SectionContainer>
        </QuestionContainer>

    </div>)
  }

export default Question