import React, { Component } from 'react';

import { Container , Card , CardPlace  } from './styles';

export default class Body extends Component {
  render() {
    return <div>
        <Container>
            <section >
                <div>
                    <h1> Categorias </h1>
                </div>
            </section>
                <CardPlace>
                    <Card>
                            <h2> História </h2>
                        </Card>


                        <Card>
                            <h2> História </h2>
                        </Card>
                    <Card>
                            <h2> História </h2>
                        </Card>



                </CardPlace>
        </Container>
    </div>
  }
}
