import React, { useState, useEffect } from 'react'
import MonsterIcon from './monster-icon.png'
import {useParams , Link} from 'react-router-dom'
import { useSelector } from 'react-redux' 


import { SectionContainer, Container , Row } from '../styleGrid/base'
import { Col } from '../styleGrid/grid'
import { FinalResultContainer , FinalResultCard, Header ,
    InfoHeader, ResultButton } from './styles';

export default function FinalResult(){
    
    let { categoryDoneReturn } = useParams()
    const testDone = useSelector( state => state.data)



    const [allCorrectQuestions,setAllCorrectQuestions] = useState()
    const [correctEasyQuestions,setCorrectEasyQuestions] = useState()
    const [correctMediumQuestions,setCorrectMediumQuestions] = useState()
    const [correctHardQuestions,setCorrectHardQuestions] = useState()
    const [wrongEasyQuestions,setWrongEasyQuestions] = useState()
    const [wrongMediumQuestions,setWrongMediumQuestions] = useState()
    const [wrongHardQuestions,setWrongHardQuestions] = useState()
    
    
    
    useEffect(()=>{

        function loadCategoriesDone() {
        let counter = 0
            
            testDone.forEach(catDone=>{
                counter = testDone.indexOf(categoryDoneReturn)
            })

            
            setAllCorrectQuestions(testDone[counter + 1])
            setCorrectEasyQuestions(testDone[counter + 2])
            setCorrectMediumQuestions(testDone[counter + 3])
            setCorrectHardQuestions(testDone[counter + 4])
            setWrongEasyQuestions(testDone[counter + 5])
            setWrongMediumQuestions(testDone[counter + 6])
            setWrongHardQuestions(testDone[counter + 7])

            

        }
        loadCategoriesDone()
    },[])


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
                                    <h2>You finished the test</h2>
                                </Row>
                                <Row>
                                    <InfoHeader>
                                        <h1>Bellow is your final result</h1>
                                    </InfoHeader>
                                </Row>
                            </Header>
                            <SectionContainer>
                                <Row>
                                    <div className="resultDescription1">
                                        <Col de='6'>
                                            <h1>{allCorrectQuestions}</h1>
                                            
                                            <p>Correct</p>
                                        </Col>

                                        <Col de='6'>
                                            <h1>{10 - allCorrectQuestions}</h1>
                                            <p>Wrong</p>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <div class="resultDescription2">
                                        <Col de='4'>
                                            <Col de='10'>
                                                <h2>Easy</h2>
                                                <p className="resultP">Correct : {correctEasyQuestions}</p>
                                                <p className="resultP"> Wrong: {wrongEasyQuestions}</p>
                                            </Col>
                                            <Col de='2'>
                                                <div className="divisor"></div>
                                            </Col>
                                        </Col>
                                        <Col de='4'>
                                            <Col de='10'>
                                                <h2>Medium</h2>
                                                <p className="resultP">Correct : {correctMediumQuestions}</p>
                                                <p className="resultP"> Wrong: {wrongMediumQuestions}</p>
                                            </Col>
                                            <Col de='2'>
                                                <div className="divisor"></div>
                                            </Col>
                                        </Col>
                                        <Col de='4'>
                                            <h2>Hard</h2>
                                            <p className="resultP">Correct : {correctHardQuestions}</p>
                                            <p className="resultP"> Wrong: {wrongHardQuestions}</p>
                                        </Col>
                                    </div>
                                </Row>
                                <Row>
                                    <Link to={`/`}>
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

