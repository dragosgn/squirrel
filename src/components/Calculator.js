import React from "react"
import styled from "styled-components"
import {compose} from "recompose"
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'


const Root = styled.div`
  padding: 4rem;
`

const StyledField = styled(Field)`
  margin: 1rem;
  padding: 0.5rem
`

const StyledForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledButton = styled.button`
  max-width: 5rem;
  padding: 0.5rem;
  border-radius: 5px;
`

let Calculator = (props) => {
  return <Root>
    <StyledForm>
      <StyledField {...props} component="input" type="text" name="netIncome"/>
      <StyledField {...props} component="input" type="text" name="rent"/>
      <StyledField {...props} component="input" type="text" name="transportation"/>
      <StyledField {...props} component="input" type="text" name="food"/>
      <StyledField {...props} component="input" type="text" name="phone"/>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
    <div>
    </div>
  </Root>
}


export default compose(
  reduxForm({
    form: 'budgetCalculation'
  })
)(Calculator)
