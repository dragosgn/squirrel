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
  max-width: 300px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
`

const Button = styled.button`
  background-color: ${ props => props.brandBlue};
  padding: 0.5rem;
`

const MoneyInput = styled(Field)`
  padding: 0.25rem;
`


let Calculator = (props) => {
  return <Root>
        <form>
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
            <Row style={{ justifyContent: "flexEnd"}}>
              <Button type="submit">Submit</Button>
            </Row>
          </form>
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
