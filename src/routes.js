import React from 'react';
import {Switch , Route} from 'react-router-dom'
import { Home} from './pages/Home'
import { Test } from './pages/Question'
import { Result} from './pages/FinalResult'

export default function Routes(){
    return <>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/test" component={Test}/>
          <Route path="/result" component={Result}/>
        </Switch>
    </>
    
  }

