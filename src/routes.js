import React from 'react';
import {Switch , Route} from 'react-router-dom'
import { Home} from './pages/Home'
import { Test } from './pages/Question'
import { Result} from './pages/FinalResult'
import RightModalResult from './components/ModalResult/RightAnswer';
import WrongModalResult from './components/ModalResult/WrongAnswer';


export default function Routes(){
    return <>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path="/test/:category" component={Test}/>
          <Route  path="/test/:category/:allRightQuestions/:rightEasyQuestions/:rightMediumQuestions/:rightHardQuestions/:wrongEasyQuestions/:wrongMediumQuestions/:wrongHardQuestions/result" component={Result}/>
        </Switch>
    </>
    
  }

