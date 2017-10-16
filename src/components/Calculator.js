import React from "react"
import styled from "styled-components"
import {compose} from "recompose"
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'
import {connect} from 'react-redux'

import { Button, Row, Col } from 'react-materialize';

const Root = styled.div`
  padding: 4rem;
`

let Calculator = (props) => {
  return <Root container>
    <Row>
      <Col s={6}>
        <form>
            <Row>
              <Field component="input" type="text" name="netIncome"/>
              <label>Net Income (€)</label>
            </Row>
            <Row>
              <Field component="input" type="text" name="rent" id="rent"/>
              <label >Rent (€)</label>
            </Row>
            <Row>
              <Field component="input" type="text" name="transportation"/>
              <label >Tansportation costs</label>
            </Row>
            <Row>
              <Field component="input" type="text" name="food" />
              <label >Food (€)</label>
            </Row>
            <Row>
              <Field component="input" type="text" name="phone"/>
              <label >Phone (€)</label>
            </Row>
            <Button waves="light" btn="large" type="submit">Submit</Button>
          </form>
          <div>
            <p>Total monthly spendings:</p>
            <h5>{props.spendings} (€)</h5>
          </div>
      </Col>
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
