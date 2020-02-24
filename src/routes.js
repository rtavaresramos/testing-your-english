import React from 'react';
import {Switch , Route} from 'react-router-dom'
import { Home} from './pages/Home'
import { Test } from './pages/Question'
import { Result} from './pages/FinalResult'



export default function Routes(){
    return <>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path="/test/:category/" component={Test}/>
          <Route exact path="/test/:categoryDoneReturn/result" component={Result}/>
          
        </Switch>
    </>
    
  }

