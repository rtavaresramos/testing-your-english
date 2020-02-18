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

    //  useEffect(() => {
    //     function removeDuplicatedCategory(){
    //         const newCategory = questions.map( question =>{
    //             const uniqueCategory = question.category.
    //             filter((elem, index, arr) => arr.indexOf((elem)===index))
    //             return uniqueCategory
    //         })
    //         setCategory(newCategory)
    //     }
    //     removeDuplicatedCategory()
    //     console.log(category)
    //  }, [])
    
        // questions.map( question =>{
        //     const newCategory = 
        //     const uniqueCategory = question.category.
        //     filter((elem, index, arr) => arr.indexOf((elem)===index))

        //     setCategory(uniqueCategory)
        // })
 
     const a = questions.map(question => (
         question.category
     ))
     const uniqueCategory = Array.from(new Set(a));

    console.log(uniqueCategory)
     
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
                            function(){
                                let <i></i>
                            }
                    return (<Col key={}de='3'>
                                <CardButton>
                                    <h1>{uniqueCategory[]}</h1>
                                </CardButton>
                            </Col>)
                            })}
                        </Row>
                    </CardSection>
                </SectionContainer>
            </Container>
      </HomeContainer>
    )
  }


export default HomeContent
