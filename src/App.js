import React from 'react'
import {compose} from "recompose"
import styled from "styled-components"
import Calculator from "./components/Calculator"

import { Container, Card, CardTitle, Button, Row, Col } from 'react-materialize';



const App = () => {
  return <Container>
    <Card
      className='medium'
      header={<CardTitle image='http://www.overells.com.au/files/images/content/newsletter/Budget.png'>Budget Calculator</CardTitle>}
      >
      Calculate your monthy spendings and budgets and find out where you can improve. Be a smart consumer!
    </Card>
      <Calculator />
    </Container>
}


export default compose(

)(App)
