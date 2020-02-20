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
    const[rightAnswer, setRightAnswer] = useState([])
    const[allAnswers, setAllAnswers] = useState([])
    const[difficulty, setDifficulty] = useState([])
    const[currentQuestion,setCurrentQuestion] = useState(0)
    const[correctAnswer,setCorrectAnswer] = useState()
    const[userAnswer,setUserAnswer] = useState()
    const { category } = useParams()
    // const[counter, setCounter] = useState()



    useEffect(() => {
        async function loadQuestions() {
            const response = await api.get()
            const data = response.data
            let allQuestions = []
            let allRightAnswer = []
            let allAnswers = []
            let allDifficulty = []

            
            let categoryQuestions = data.filter(question => {
                return question.category === category
              })
                console.log(currentQuestion)
                categoryQuestions.forEach(question=>{
                if(!allQuestions.includes(question.question)){allQuestions.push(question.question)}

                if(!allRightAnswer.includes(question.question)){allRightAnswer.push( question.correct_answer)}

                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.correct_answer)}
                
                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.incorrect_answers[currentQuestion ])}

                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.incorrect_answers[currentQuestion  + 1])}

                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.incorrect_answers[currentQuestion + 2])}

                if(!allDifficulty.includes(question.question)){allDifficulty.push(question.difficulty)}
                console.log(allAnswers)
              })
                          
            setQuestion(allQuestions)
            setRightAnswer(allRightAnswer)
            setDifficulty(allDifficulty)
            setAllAnswers(allAnswers)
            
            
        }
        loadQuestions()
     },[])
    
    //  useEffect(()=>{
    //     setCounter(0)
    //  },[])
    //     console.log(counter)
     
    function nextQuestion(){
        if(currentQuestion <9){
            setCurrentQuestion(currentQuestion + 1)
        }else{
    
    
            console.log('teste finalizado')
        }
    }


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
                                            <h1> {`Questão ${currentQuestion + 1}`}</h1>
                                        </Col>
                                        <Col de='6'>
                                            <div className="questionLevel">
                                                <h2> 
                                                    <span>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </span>
                                                    {difficulty[currentQuestion]}  
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p>{question[currentQuestion]}</p>
                                    </Row>
                                </Container>
                            </QuestionHeader>
                            <QuestionAswer>
                                    <QuestionOption>
                                        <p>{allAnswers[4 * currentQuestion]}</p>
                                    </QuestionOption>
                                    
                                    <QuestionOption>
                                        <p>{allAnswers[4 * currentQuestion + 1]}</p>
                                    </QuestionOption>

                                    <QuestionOption>
                                        <p>{allAnswers[4 * currentQuestion + 2]}</p>
                                    </QuestionOption>

                                    <QuestionOption>
                                        <p>{allAnswers[4 * currentQuestion + 3]}</p>
                                    </QuestionOption>
                                    <AnswerButton onClick={nextQuestion}>
                                        Responda
                                    </AnswerButton>
                        </QuestionAswer>
                </QuestionCard>
            </SectionContainer>
        </QuestionContainer>

    </div>)
  }

export default Question