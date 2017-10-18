import React from "react"
import styled from "styled-components"
import {compose} from "recompose"
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import {connect} from 'react-redux'


const Root = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`

const Button = styled.button`
  background-color: ${ props => props.brandBlue};
  padding: 0.5rem;
  margin-top: 1rem;
`

const MoneyInput = styled(Field)`
  padding: 0.25rem;
`

const StyledForm = styled.form`
  border: 1px solid grey;
  border-radius: 2px;
  padding: 1rem;
`

const ButtonRow =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`


let Calculator = (props) => {
  return <Root>
        <StyledForm>
            <Row>
              <label>Net Income (€)</label>
              <MoneyInput component="input" type="text" name="netIncome"/>
            </Row>
            <Row>
              <label >Rent (€)</label>
              <MoneyInput component="input" type="text" name="rent" id="rent"/>
            </Row>
            <Row>
              <label >Tansportation costs</label>
              <MoneyInput component="input" type="text" name="transportation"/>
            </Row>
            <Row>
              <label >Food (€)</label>
              <MoneyInput component="input" type="text" name="food" />
            </Row>
            <Row>
              <label >Phone (€)</label>
              <MoneyInput component="input" type="text" name="phone"/>
            </Row>
            <ButtonRow>
              <Button type="submit">Submit</Button>
            </ButtonRow>
          </StyledForm>
          <Row>
            <p>Total monthly spendings:</p>
            <h5>{props.spendings} (€)</h5>
          </Row>
  </Root>
}


export default compose(
  connect(state => {
    return {spendings: state.form.budgetCalculation.spendings}
  }),
  reduxForm({
    form: 'budgetCalculation'
  })
)(Calculator)
