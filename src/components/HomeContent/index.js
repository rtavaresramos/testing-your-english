import React, { useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import QuestionCategoryCard from '../QuestionCategoryCard'
 

import { SectionContainer, Container , Row } from '../styleGrid/base'
import { Col } from '../styleGrid/grid';
import { HomeContainer, CardSection } from './styles'


 function HomeContent() {
    let { categoryReturn, allRightQuestions, rightEasyQuestions, rightMediumQuestions,
        rightHardQuestions, wrongEasyQuestions, 
        wrongMediumQuestions, wrongHardQuestions , arr} = useParams()

    const [categoriesReturn, setCategoriesReturn] = useState([])
    const [counter, setCounter] = useState()

    const categoriesDone = useSelector( state => state.data)
    const dispatch = useDispatch( )

    let auxCategoriesReturn =[]

   function addCourseDone(){
       dispatch({ type: 'CATEGORY_DONE', category: `'${categoryReturn}'`})
   }



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
                <SectionContainer >
                    <CardSection>
                        <Row >
                            <QuestionCategoryCard/>
                        </Row>
                    </CardSection>
                </SectionContainer>
            </Container>
      </HomeContainer>
    )
  }


export default HomeContent
