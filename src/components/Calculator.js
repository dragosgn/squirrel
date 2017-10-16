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
  padding: 0.5rem;
  min-width: 200px;
`

const StyledForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  border: solid 1px grey;
  border-radus: 5px;
`

const StyledButton = styled.button`
  max-width: 5rem;
  padding: 0.5rem;
  border-radius: 5px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

let Calculator = (props) => {
  return <Root>
    <StyledForm>
      <Row>
        <p>Net Income:</p>
        <StyledField {...props} component="input" type="text" name="netIncome"/>
      </Row>
      <Row>
        <p>Rent:</p>
        <StyledField {...props} component="input" type="text" name="rent"/>
      </Row>
      <Row>
        <p>Transportation:</p>
        <StyledField {...props} component="input" type="text" name="transportation"/>
      </Row>
      <Row>
        <p>Food:</p>
        <StyledField {...props} component="input" type="text" name="food"/>
      </Row>
      <Row>
        <p>Phone:</p>
        <StyledField {...props} component="input" type="text" name="phone"/>
      </Row>
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
