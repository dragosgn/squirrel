import React from 'react'
import {compose} from "recompose"
import styled from 'styled-components'
import {Route} from 'react-router-dom'

import Calculator from './components/Calculator'
import Home from './components/Home'

const Root = styled.div`

`

const App = () => {
  return <Root>
    <Route exact path="/" component={Home} />
    <Route path="/budgeting" component={Calculator}/>
  </Root>
}

export default compose(

)(App)
