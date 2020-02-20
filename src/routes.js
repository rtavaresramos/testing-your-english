import React from 'react';
import {Switch , Route} from 'react-router-dom'
import { Home} from './pages/Home'
import { Test } from './pages/Question'
import { Result} from './pages/FinalResult'
import WrongModal from './pages/WrongModal';
import RightModal from './pages/RightModal';

export default function Routes(){
    return <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test/:category" component={Test}/>
          <Route path="/test/:category/right" component={RightModal}/>
          <Route path="/test/:category/wrong" component={WrongModal}/>
          <Route path="/result" component={Result}/>
        </Switch>
    </>
    
  }

