import React, {useState , useEffect} from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base'
import { Col } from '../styleGrid/grid'
import { QuestionContainer, QuestionCard , 
    QuestionHeader , QuestionOption , 
    QuestionAnswer, AnswerButton } from './styles'
import { ModalContainer, ModalContent, ModalButton } from './styles'
import api from '../../services/api'
import {useParams, Link} from 'react-router-dom'


function Question(){
    // Question States
    const[question, setQuestion] = useState([])
    const[rightAnswer, setRightAnswer] = useState([])
    const[allAnswers, setAllAnswers] = useState([])
    const[options, setOptions] = useState([])
    const[difficulty, setDifficulty] = useState([])
    const[currentQuestion,setCurrentQuestion] = useState(0)
    const[allCorrectQuestions,setAllCorrectQuestions] = useState(0)
    const[correctEasyQuestions,setCorrectEasyQuestions] = useState(0)
    const[correctMediumQuestions,setCorrectMediumQuestions] = useState(0)
    const[correctHardQuestions,setCorrectHardQuestions] = useState(0)
    const[wrongEasyQuestions,setWrongEasyQuestions] = useState(0)
    const[wrongMediumQuestions,setWrongMediumQuestions] = useState(0)
    const[wrongHardQuestions,setWrongHardQuestions] = useState(0)
    const[userAnswer,setUserAnswer] = useState()
    const[btnActive, setBtnActive] = useState("disabled")
    const[iconLevel, setIconLevel] = useState(``)
    const { category } = useParams()

    // Modal States 

    const[modalClosed, setModalClosed] = useState("hide")
    const[modalResultColor, setModalResultColor] = useState("")
    const[modalResultClass, setModalResultClass] = useState("")
    const[modalResultText, setModalResultText] = useState("")
    const[modalResultIcon, setModalResultIcon] = useState("")
    const[finalRoute, setFinalRoute] = useState(`/test/${category}`)


    let e = 0
    



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
                categoryQuestions.forEach(question=>{
                if(!allQuestions.includes(question.question)){allQuestions.push(question.question)}

                if(!allRightAnswer.includes(question.question)){allRightAnswer.push( question.correct_answer)}

                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.correct_answer)}
                
                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.incorrect_answers[currentQuestion ])}

                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.incorrect_answers[currentQuestion  + 1])}

                if(!allAnswers.includes(question.question[currentQuestion])){allAnswers.push(question.incorrect_answers[currentQuestion + 2])}

                if(!allDifficulty.includes(question.question)){allDifficulty.push(question.difficulty)}
                    console.log(allDifficulty)
              })
                          
            setQuestion(allQuestions)
            setRightAnswer(allRightAnswer)
            setDifficulty(allDifficulty)
            setAllAnswers(allAnswers)
            
            
        }
        loadQuestions()
     },[])
    
    useEffect(()=>{
        function sortOptionsInArray(){
            let option = []
            if(!option.includes(allAnswers[4 * currentQuestion])){option.push(allAnswers[4 * currentQuestion])}

            if(!option.includes(allAnswers[4 * currentQuestion + 1])){option.push(allAnswers[4 * currentQuestion + 1])}

            if(!option.includes(allAnswers[4 * currentQuestion + 2])){option.push(allAnswers[4 * currentQuestion + 2])}

            if(!option.includes(allAnswers[4 * currentQuestion + 3])){option.push(allAnswers[4 * currentQuestion + 3])}

            setOptions(option.sort())

        }
        sortOptionsInArray()
    },[allAnswers, currentQuestion])
     
 
    function nextQuestion(){
        if(currentQuestion <9){
            setCurrentQuestion(currentQuestion + 1)
            e = 0
            setBtnActive("disabled")
        }else{
    
    setFinalRoute(`/test/${category}/${allCorrectQuestions}/${correctEasyQuestions}/${correctMediumQuestions}/${correctHardQuestions}/${wrongEasyQuestions}/${wrongMediumQuestions}/${wrongHardQuestions}/result`)
        
        }
    }
    function btnActityVerifyIn(){
        
        var e = 1 


        return e , setBtnActive("enabled")}

    function btnActivityVerifyOut(){
        if(e = 0){setBtnActive("disabled")}}


   function answerVerify(){

    if(userAnswer == rightAnswer[currentQuestion]){

        if(difficulty[currentQuestion] == "easy"){
            setCorrectEasyQuestions(correctEasyQuestions +1)
        }else{
            if(difficulty[currentQuestion] == "medium"){
                setCorrectMediumQuestions(correctMediumQuestions +1)
            }else{
                if(difficulty[currentQuestion] == "hard"){
                    setCorrectHardQuestions(correctHardQuestions +1)
                }
            }
        }
        setAllCorrectQuestions(allCorrectQuestions + 1)
        setModalResultText("acertou")
        setModalResultColor("#32CB82")
        setModalResultClass("right")
        setModalResultIcon("fas fa-check-circle")


    }else{


            if(difficulty[currentQuestion] == "easy"){
                setWrongEasyQuestions(wrongEasyQuestions +1)
            }else{
                if(difficulty[currentQuestion] == "medium"){
                    setWrongMediumQuestions(wrongMediumQuestions +1)
                }else{
                    if(difficulty[currentQuestion] == "hard"){
                        setWrongHardQuestions(wrongHardQuestions +1)
                    }
                }
            }
        
        setModalResultText("errou")
        setModalResultColor("#FF4F4F")
        setModalResultClass("wrong")
        setModalResultIcon("fas fa-times-circle")


    }
   }

   function closeModal(){
    setModalClosed("hide")}
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
                                <Link to="/">
                                    <span>
                                    <i className="far fa-times-circle"></i>
                                    </span>
                                    Fechar
                                </Link>
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
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
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
                            <QuestionAnswer>
                                    <QuestionOption onFocus={function(){btnActityVerifyIn()
                                     setUserAnswer(options[0])}}
                                    onBlur={btnActivityVerifyOut}
                                     className="answerOption">
                                        <p>{options[0]}</p>
                                    </QuestionOption>
                                    
                                    <QuestionOption onFocus={function(){btnActityVerifyIn()
                                     setUserAnswer(options[1])}}
                                    onBlur={btnActivityVerifyOut}
                                     className="answerOption">
                                        <p>{options[1]}</p>
                                    </QuestionOption>

                                    <QuestionOption onFocus={function(){btnActityVerifyIn()
                                    setUserAnswer(options[2])}}
                                    onBlur={btnActivityVerifyOut}
                                     className="answerOption">
                                        <p>{options[2]}</p>
                                    </QuestionOption>

                                    <QuestionOption onFocus={   function(){btnActityVerifyIn()
                                     setUserAnswer(options[3])}}
                                    onBlur={btnActivityVerifyOut}
                                     className="answerOption">
                                        <p>{options[3]}</p>
                                    </QuestionOption>

                                    <AnswerButton id="buttonAnswer" onClick={function(){
                                        setModalClosed("Show")
                                        answerVerify()
                                        nextQuestion()}}
                                         className={btnActive}
                                    >
                                        Responda
                                    </AnswerButton>
                        </QuestionAnswer>
                </QuestionCard>
            </SectionContainer>
            <ModalContainer className={modalClosed}>
            <ModalContent borderColor={modalResultColor}>
                <div>
                    <span className={modalResultClass}>
                        <i  className={modalResultIcon}></i>
                    </span>
                </div>
            <h1>{`Você ${modalResultText} !`}</h1>
                <Link to={finalRoute}>
                <ModalButton onClick={closeModal}>
                    Avançar
                    <i className="fas fa-arrow-right"></i>
                </ModalButton>
                </Link>
            </ModalContent>
        </ModalContainer>
        </QuestionContainer>

    </div>)
  }

export default Question