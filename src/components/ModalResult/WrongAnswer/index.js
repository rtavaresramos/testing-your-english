import React, { Component } from 'react';

import { ModalContainer, ModalContent, ModalButton } from './styles';

export default class ModalResult extends Component {
  render() {
    return (<div>
        <ModalContainer>
            <ModalContent className="hide">
                <div className="wrongAnswer">
                    <span >
                        <i class="fas fa-times-circle"></i>
                    </span>
                </div>
            <h1>Você errou!</h1>
                <ModalButton>
                    Avançar
                    <i class="fas fa-arrow-right"></i>
                </ModalButton>
            </ModalContent>
        </ModalContainer>
    </div>)
  }
}
