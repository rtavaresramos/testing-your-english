import React, { Component } from 'react';

import { ModalContainer, ModalContent, ModalButton } from './styles';

export default class ModalResult extends Component {
  render() {
    return (<div>
        <ModalContainer >
            <ModalContent >
                <div className="rightAnswer">
                    <span >
                        <i class="fas fa-check-circle"></i>
                    </span>
                </div>
            <h1>Você acertou!</h1>
                <ModalButton>
                    Avançar
                    <i class="fas fa-arrow-right"></i>
                </ModalButton>
            </ModalContent>
        </ModalContainer>
    </div>)
  }
}
