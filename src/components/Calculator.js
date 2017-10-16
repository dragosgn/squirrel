import React from "react"
import styled from "styled-components"
import {compose} from "recompose"
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'


const Root = styled.div`
  padding: 30px;
`

let Calculator = (props) => {
  return <Root>
    <form>
      <Field {...props} component="inmput" type="text" />
    </form>
  </Root>
}


export default compose(
  reduxForm({
    form: 'budgetCalculation'
  })
)(Calculator)
