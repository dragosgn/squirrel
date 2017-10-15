import React from "react"
import styled from "styled-components"
import {compose} from "recompose"

const Root = styled.div`
  padding: 30px;
`

let Calculator = () => {
  return <Root>
    This is the root of the Calculator.
  </Root>
}


export default compose(

)(Calculator)
