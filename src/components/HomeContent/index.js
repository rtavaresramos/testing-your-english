import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { SectionContainer, Container , Row } from '../styleGrid/base'
import { Col } from '../styleGrid/grid';
import { HomeContainer, CardButton , CardSection } from './styles'
import api from '../../services/api'


 function HomeContent() {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get()
            const data = await response.data
            let categories = []

            data.forEach( question => {
                if ( !categories.includes(question.category) ) { categories.push(question.category) }
            } )

            setCategories(categories)
        }
        loadCategories()
     }, [
        setCategories
     ])

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
                            { categories.map( ( category, cat ) => (
                                <Link to={`/test/${category}`}>
                                <Col id={category} key={ cat }
                                 de='3' >
                                    <CardButton>
                                        <h1>{ category }</h1>
                                    </CardButton>
                                </Col>
                                </Link>
                            ) )}
                        </Row>
                    </CardSection>
                </SectionContainer>
            </Container>
      </HomeContainer>
    )
  }


export default HomeContent
