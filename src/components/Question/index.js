import React, {useState , useEffect} from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base'
import { Col } from '../styleGrid/grid'
import { QuestionContainer, QuestionCard , 
    QuestionHeader , QuestionOption , 
    QuestionAnswer, AnswerButton } from './styles'
import { ModalContainer, ModalContent, ModalButton } from './styles'
import api from '../../services/api'
import {useParams, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'


function Question(){


    // Variables relationed with Global State using Redux Hooks

    const dispatch = useDispatch()

    // URL Params
    const { category } = useParams()


    // Question structure States
    const [question, setQuestion] = useState([])
    const [rightAnswer, setRightAnswer] = useState([])
    const [allAnswers, setAllAnswers] = useState([])
    const [options, setOptions] = useState([])
    const [difficulty, setDifficulty] = useState([])
    const [currentQuestion,setCurrentQuestion] = useState(10)
    const [optionVerify1, setoptionVerify1] = useState("")
    const [optionVerify2, setoptionVerify2] = useState("")
    const [optionVerify3, setoptionVerify3] = useState("")
    const [optionVerify4, setoptionVerify4] = useState("")

    // Question Answers Control States
    const [allCorrectQuestions,setAllCorrectQuestions] = useState(0)
    const [correctEasyQuestions,setCorrectEasyQuestions] = useState(0)
    const [correctMediumQuestions,setCorrectMediumQuestions] = useState(0)
    const [correctHardQuestions,setCorrectHardQuestions] = useState(0)
    const [wrongEasyQuestions,setWrongEasyQuestions] = useState(0)
    const [wrongMediumQuestions,setWrongMediumQuestions] = useState(0)
    const [wrongHardQuestions,setWrongHardQuestions] = useState(0)
    const [counter,setCounter] = useState(0)
    const [questionNumber,setQuestionNumber] = useState(1)
    const [userAnswer,setUserAnswer] = useState()
    const [btnActive, setBtnActive] = useState("disabled")

    // Modal States 

    const [modalClosed, setModalClosed] = useState("hide")
    const [modalResultColor, setModalResultColor] = useState("")
    const [modalResultClass, setModalResultClass] = useState("")
    const [modalResultText, setModalResultText] = useState("")
    const [modalResultIcon, setModalResultIcon] = useState("")
    const [finalRoute, setFinalRoute] = useState(`/test/${category}`)

    // Difficulty Management of Questions
    const [difficultyControl, setDifficultyControl] = useState(0)

    // Test details
    const [testDetails, setTestDetails] = useState([])


//  Some variables which don't need to be an useState's variable, justo for happenings control
    let e = 0
    let icon_1 = "hide"
    let icon_2 = ""
   


//  Getting datas from the API with all questions, and informations about them

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
                    allAnswers.push(question.correct_answer)
                    allAnswers.push(question.incorrect_answers[counter ])
                    allAnswers.push(question.incorrect_answers[counter  + 1])
                    allAnswers.push(question.incorrect_answers[counter + 2])

                if(!allDifficulty.includes(question.question)){allDifficulty.push(question.difficulty)}
              })
                          
            setQuestion(allQuestions)
            setRightAnswer(allRightAnswer)
            setDifficulty(allDifficulty)
            setAllAnswers(allAnswers)
            
            
        }
        loadQuestions()
     },[])
    

//  Adjusting the control of the order that the options appears in the screen

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
    },[allAnswers, counter])
     
    function iconDifficultyControl(){
        switch(difficulty[currentQuestion]){
            
            case "easy": 
                icon_1 = "hide"
                icon_2 = "hide"
            break

            case "medium": icon_1 = "hide"
            break

            case "hard":
                icon_1 = ""
                icon_2 = ""

            default:
        }
    }

    iconDifficultyControl()

//  Here we have the function which change questions and options in the screen, as a SPA project, 
// it use the just one component and only datas are updated

    function nextQuestion(){
            
        
        if (counter < 9 ){
            setCurrentQuestion(currentQuestion + 1)
            setCounter(counter + 1)
            iconDifficultyControl()


                switch(difficultyControl){
                    case 2:
                        setDifficultyControl(0)
                        switch(difficulty[currentQuestion]){
                        case "easy": 
                        
                            setCurrentQuestion(currentQuestion + question.length/3)

                
                        break
                
                        case "medium":
                            setCurrentQuestion(currentQuestion + question.length/3)

                
                        break
                
                
                        default:
                       }
                    break
         
                    case -2:
                        setDifficultyControl(0)
                        switch(difficulty[currentQuestion]){
                            case "hard": 
                            setCurrentQuestion(currentQuestion - question.length/3)
                            
                            break
                    
                            case "medium":
                                setCurrentQuestion(currentQuestion - question.length/3)

                    
                            break
                    
                    
                            default:
                           }
                     break
         
                     default:
                }

        }
        if(questionNumber < 10){
            e = 0
            setBtnActive("disabled")
            setQuestionNumber(questionNumber + 1)
        }

    }

//  Here there is a activate control for the button to send the user answer

    function btnActityVerifyIn(){
        setBtnActive("enabled")}


//  Here, the function verify if the answer from user is correct or not. Also call the function which
// change or not the question level

   function answerVerify(){
    
    if(userAnswer == rightAnswer[currentQuestion]){
    }else{
    }

    if(userAnswer == rightAnswer[currentQuestion]){
        setDifficultyControl(difficultyControl + 1)


        switch(difficulty[currentQuestion]){
            case "easy":
                setCorrectEasyQuestions(correctEasyQuestions +1)
            break;

            case "medium":
                setCorrectMediumQuestions(correctMediumQuestions +1)
            break;

            case "hard":
                setCorrectHardQuestions(correctHardQuestions +1)
            break;

            default:

        }

        setAllCorrectQuestions(allCorrectQuestions + 1)
        setModalResultText("You're correct!")
        setModalResultColor("#32CB82")
        setModalResultClass("right")
        setModalResultIcon("fas fa-check-circle")


    }else{
        setDifficultyControl(difficultyControl - 1)


        switch(difficulty[currentQuestion]){
            case "easy":
                setWrongEasyQuestions(wrongEasyQuestions +1)

            break;

            case "medium":
                setWrongMediumQuestions(wrongMediumQuestions +1)

            break;

            case "hard":
                setWrongHardQuestions(wrongHardQuestions +1)

            break;
            default:

        }
           
        setModalResultText("You're wrong!")
        setModalResultColor("#FF4F4F")
        setModalResultClass("wrong")
        setModalResultIcon("fas fa-times-circle")


    }

    setModalClosed("Show")
   }


//  Here, is the function which check the current difficulty, and the two ones bellow get up or down the
//  difficulty level from the next question

   function getCurrentDate(){
    var dNow = new Date();
    var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes()
    return localdate

  }

 
//  Here, you have the function which sends the information necessary to the FinalResult component
function addCategorieDone(){
    dispatch({ type: 'CATEGORY_DONE', category:`${category}`, allRightQuestions: `${allCorrectQuestions}`, 
    rightEasyQuestions: `${correctEasyQuestions}`,rightMediumQuestions: `${correctMediumQuestions}`,
    rightHardQuestions: `${correctHardQuestions}`,wrongEasyQuestions: `${wrongEasyQuestions}`,
    wrongMediumQuestions: `${wrongMediumQuestions}`,wrongHardQuestions: `${wrongHardQuestions}`})
  }

  function detailsVerify(){
    if(userAnswer == rightAnswer){
        
        return "right"
    
    }else{
            
            return "wrong"}
    }

function closeModal(){
        
        dispatch({ type: 'ANSWERS_DATAILS', category:`"${category}"`, userAnswer:`"${userAnswer}"`,
        difficulty:`"${difficulty[currentQuestion]}"`, rightAnswer:`"${rightAnswer[currentQuestion]}"`, 
        localdate:`"${getCurrentDate()}"`, result:`"${detailsVerify()}"`})
      
       if(counter > 8){
        setModalResultText("Verificar resultado")
        setModalResultColor("#438DE4")
        setModalResultClass("end")
        setModalResultIcon("fas fa-clipboard-check")

        dispatch({ type: 'ANSWERS_DATAILS', category:`"${category}"`, userAnswer:`"${userAnswer}"`,
        difficulty:`"${difficulty[currentQuestion]}"`, rightAnswer:`"${rightAnswer[currentQuestion]}"`, 
        localdate:`"${getCurrentDate()}"`, result:`"${detailsVerify()}"`})
        

        console.log(`"Os seguintes dados estão sendo mantidos como estado global de type: ANSWER_DETAILS => category:${category}, userAnswer:${userAnswer},difficulty:${difficulty[currentQuestion]}, rightAnswer:${rightAnswer[currentQuestion]}, localdate:${getCurrentDate()}, result:${detailsVerify()}"`)


        addCategorieDone()

        setFinalRoute(`/test/${category}/result`)
       }else{
    setModalClosed("hide")}}


    // Here is the control about the border of selected option

    function setOption(){
        setoptionVerify1("")
        setoptionVerify2("")
        setoptionVerify3("")
        setoptionVerify4("")


        switch(userAnswer){
            case options[0]:
                 setoptionVerify1("selected")
            break

            case options[1]:
                 setoptionVerify2("selected")
            break

            case options[2]:
                 setoptionVerify3("selected")
            break

            case options[3]:
                setoptionVerify4("selected")
            break

            default:
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
                                            <h1> {`Question Number: ${questionNumber}`}</h1>
                                        </Col>
                                        <Col de='6'>
                                            <div className="questionLevel">
                                                <h2> 
                                                    <span>
                                                        <i className={`fas fa-star ${icon_1}`}></i>
                                                        <i className={`fas fa-star ${icon_2}`}></i>
                                                        <i className="fas fa-star "></i>
                                                        
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
                                    <QuestionOption onClick={setOption}className={optionVerify1}onFocus={function(){btnActityVerifyIn()
                                     setUserAnswer(options[0])}}>
                                        <p>{options[0]}</p>
                                    </QuestionOption>
                                    
                                    <QuestionOption onClick={setOption}className={optionVerify2}onFocus={function(){btnActityVerifyIn()
                                     setUserAnswer(options[1])}}>
                                        <p>{options[1]}</p>
                                    </QuestionOption>

                                    <QuestionOption onClick={setOption}className={optionVerify3}onFocus={function(){btnActityVerifyIn()
                                    setUserAnswer(options[2])}}>
                                        <p>{options[2]}</p>
                                    </QuestionOption>

                                    <QuestionOption onClick={setOption}className={optionVerify4}onFocus={   function(){btnActityVerifyIn()
                                     setUserAnswer(options[3])}}>
                                        <p>{options[3]}</p>
                                    </QuestionOption>

                                    <AnswerButton id="buttonAnswer" onClick={function(){
                                        answerVerify()
                                        }}
                                         className={btnActive}
                                    >
                                        Answer
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
            <h1>{modalResultText}</h1>
                <Link to={finalRoute}>
                <ModalButton onClick={function(){
                    setoptionVerify1("")
                    setoptionVerify2("")
                    setoptionVerify3("")
                    setoptionVerify4("")
                    nextQuestion()
                    closeModal()
                    }}>
                    Next
                    <i className="fas fa-arrow-right"></i>
                </ModalButton>
                </Link>
            </ModalContent>
        </ModalContainer>
        </QuestionContainer>

    </div>)
  }

export default Question