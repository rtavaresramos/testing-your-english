import React, { useEffect, useState } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col } from '../styleGrid/grid';
import { HomeContainer, CardButton , CardSection } from './styles';
import '../../teste.css'

 function HomeContent(){

    const [questions, setQuestions] = useState([])
    const [category, setCategory] = useState([])

     useEffect(() => {
         async function loadQuestions(){
            const response = await fetch('https://api.myjson.com/bins/1b9kgc')
            const data  = await response.json()
            setQuestions(data)

         }
        loadQuestions()
     }, [])

 
     const a = questions.map(question => (
         question.category
     ))
     const uniqueCategory = Array.from(new Set(a));
     
    return (
        <HomeContainer>
            <Container>
                <SectionContainer>
                    <Row>
                        <Col de='4'>
                            <h1>
                                Categorias
                            </h1>
                        </Col>
                    </Row>
                </SectionContainer>
                <SectionContainer>
                    <CardSection>
                        <Row>
                            {questions.map(function(question){
                            
                    return
                            })}
                            <Col de='3'>
                                <CardButton>
                                    <h1>historia</h1>
                                </CardButton>
                            </Col>
                        </Row>
                    </CardSection>
                </SectionContainer>
            </Container>
      </HomeContainer>
    )
  }


export default HomeContent
