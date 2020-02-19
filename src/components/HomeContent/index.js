import React, { useEffect, useState } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col } from '../styleGrid/grid';
import { HomeContainer, CardButton , CardSection } from './styles';
import '../../teste.css'

 function HomeContent() {

    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadQuestions() {
            const response = await fetch('https://api.myjson.com/bins/1b9kgc');
            const data  = await response.json();

            let categories = [];

            data.forEach( question => {
                if ( !categories.includes(question.category) ) { categories.push(question.category) }
            } );

            setCategories(categories);
            setQuestions(data);
        }
        loadQuestions()
     }, [
        setQuestions,
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
                                <Col id={category} key={ cat } de='3'>
                                    <CardButton>
                                        <h1>{ category }</h1>
                                    </CardButton>
                                </Col>
                            ) )}
                        </Row>
                    </CardSection>
                </SectionContainer>
            </Container>
      </HomeContainer>
    )
  }


export default HomeContent
