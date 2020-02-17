import React, { Component } from 'react';
import { SectionContainer, Container , Row } from '../styleGrid/base';
import { Col, SectionCol } from '../styleGrid/grid';
import { HomeContainer, CardButton , CardSection } from './styles';
import '../../teste.css'

export default class HomeContent extends Component {
  render() {
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
                            <Col de='3'>
                                <CardButton>
                                <h1>
                                    História
                                </h1>
                                </CardButton>
                            </Col>
                            <Col de='3'>
                                <CardButton>
                                <h1>
                                    História
                                </h1>
                                </CardButton>
                            </Col>
                            <Col de='3'>
                                <CardButton>
                                <h1>
                                    História
                                </h1>
                                </CardButton>
                            </Col>
                            <Col de='3'>
                                <CardButton>
                                <h1>
                                    História
                                </h1>
                                </CardButton>
                            </Col>
                            <Col de='3'>
                                <CardButton>
                                <h1>
                                    História
                                </h1>
                                </CardButton>
                            </Col>
                            <Col de='3'>
                                <CardButton>
                                <h1>
                                    História
                                </h1>
                                </CardButton>
                            </Col>
                        </Row>
                    </CardSection>
                </SectionContainer>
            </Container>
      </HomeContainer>
    )
  }
}
