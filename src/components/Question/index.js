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

            let categoryQuestions = data.filter((question) => {
                return question.category === category
              })

            setQuestion(categoryQuestions);
        }
        loadQuestions()
     }, [setQuestion])

     question.map(question => 
        console.log(question))

    // function activeButton(){
    //     let e = document.getElementById('#button')
    //     e.addClassName('enabled')
    // }
    
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
                                {question.map(question=> 
                                <>
                    <QuestionHeader>
                        <Container>
                            <Row>

                                <Col de='6'>
                                    <h1> {`Questão ${question.id}`}</h1>
                                </Col>
                                <Col de='6'>
                                    <div className="questionLevel">
                                        <h2> 
                                            <span>
                                                {/* {()=>{
                                                const level = ""
                                                if(question.difficulty == "easy"){
                                                    level = '<i class="fas fa-star">'
                                                }else{
                                                    if(question.difficulty == "medium"){
                                                        level = '<><i class="fas fa-star"></i><i class="fas fa-star"></>'
                                                    }else{
                                                        if(question.difficulty == "hard"){
                                                            level = '<><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
                                                        }
                                                }
                                                }
                                                return level
                                                }} */}
                                            </span>
                                            {question.difficulty}  
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <p>{question.question}</p>
                            </Row>
                        </Container>
                    </QuestionHeader>
                    <QuestionAswer>
                            <QuestionOption>
                                <p>{question.correct_answer}</p>
                            </QuestionOption>

                            <QuestionOption>
                                <p>{question.incorrect_answers[0]}</p>
                            </QuestionOption>

                            <QuestionOption>
                                <p>{question.incorrect_answers[1]}</p>
                            </QuestionOption>

                            <QuestionOption>
                                <p>{question.incorrect_answers[2]}</p>
                            </QuestionOption>
                            <AnswerButton id='button'>
                                Responda
                            </AnswerButton>
                        </QuestionAswer>
                                 </>   
                                    )}
                                
                </QuestionCard>
            </SectionContainer>
        </QuestionContainer>

    </div>)
  }

export default Question