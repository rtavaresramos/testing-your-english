import React, {useState , useEffect} from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col } from '../styleGrid/grid';
import { QuestionContainer, QuestionCard , 
        QuestionHeader , QuestionOption , 
        QuestionAswer, AnswerButton} from './styles';
import api from '../../services/api'
import {useParams} from 'react-router-dom'


function Question(){
    const[question, setQuestion] = useState([])
    const { category } = useParams()

    useEffect(() => {
        async function loadQuestions() {
            const response = await api.get()
            const data = await response.data
            let questionsInfos = [];

            data.forEach( question => {
                if (  question.category == category ) { questionsInfos.push(question.id, 
                    question.category, question.dificulty,
                    question.correct_answer, 
                    question.incorrect_answer) 
                    
                    console.log(question.id, 
                        question.category, question.dificulty,
                        question.correct_answer, 
                        question.incorrect_answer) }
            } );

            setQuestion(data);
        }
        loadQuestions()
     }, [setQuestion])

     question.map(question => question.id, 
        question.category, question.dificulty,
        question.correct_answer, 
        question.incorrect_answer)

    //   let i = 0
    //   function changeQuestion(i){
    //     i = i++
    //     return i
    //   }  
    return (<div>

        <QuestionContainer>
            <SectionContainer>
                <Row>
                    <Col de='12'>
                        <Row>
                            <Col de='6' className="start">
                                <h1>{category}</h1>
                            </Col>
                            <Col de='6' className="end"> 
                                <a href="/">
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
                                    {/* <h1> {`Questão ${question.id[i]}`}</h1> */}
                                </Col>
                                <Col de='6'>
                                    <div className="questionLevel">
                                        <h2> 
                                            <span>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </span>
                                            {/* {question.dificulty[i]}   */}
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