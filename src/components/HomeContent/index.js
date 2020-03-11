import React from 'react'

import QuestionCategoryCard from '../QuestionCategoryCard'
import { SectionContainer, Container , Row } from '../styleGrid/base'
import { Col } from '../styleGrid/grid';
import { HomeContainer, CardSection } from './styles'


 function HomeContent() {

    return (
        <HomeContainer>
            <Container>
                <SectionContainer>
                    <Row>
                        <Col de='4'>
                            <h1>
                                Categories
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
