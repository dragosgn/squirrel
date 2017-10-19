import React from "react"
import styled from "styled-components"
import {compose, lifecycle} from "recompose"
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import {connect} from 'react-redux'
import axios from 'axios'


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
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: ${props => props.theme.brandWhite};
  color: ${ props => props.theme.brandGreen};
  :hover {
    color: ${props => props.theme.brandWhite};
    background-color: ${ props => props.theme.brandGreen};
  }
  border: 1px solid ${ props => props.theme.brandGreen};
  border-radius: 2px;
  min-width: 6rem;
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

const ResultsRow =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.brandBlue};
  margin: 1rem 0 1rem 0;
  border-radius: 2px;
`

let Calculator = (props) => {
  console.log(props)
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
          <ResultsRow>
            <p>Total monthly spendings(€) : {props.spendings}</p>
          </ResultsRow>
  </Root>
}


export default compose(
  connect(state => {
    return {spendings: state.form.budgetCalculation.spendings}
  }),
  lifecycle({
    componentDidMount() {
      const url = "http://localhost:2000/api/budget"
      const request = async () => await axios.get(url)
      console.log(request())
    }
  }),
  reduxForm({
    form: 'budgetCalculation',
    // initialValues: state.fetchBudgetReducer
    })
)(Calculator)
