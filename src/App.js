import React from 'react'
import {compose} from "recompose"
import styled from "styled-components"
import Calculator from "./components/Calculator"


const Root = styled.div`

`

const App = () => {
  return <Root>
    This is the beggining of a long friendship
    <Calculator />
  </Root>
}


export default compose(

)(App)
