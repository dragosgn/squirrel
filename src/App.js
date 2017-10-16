import React from 'react'
import {compose} from "recompose"
import styled from 'styled-components'


const Section = styled.div`
  padding: 3rem;
`

const Root = styled.div`

`

const Bg = styled.div`
  background-image: url("http://bossfight.co/wp-content/uploads/2017/05/bossfight-free-stock-photos-coffee-shop-people-lights.jpg");
  background-size: cover;                      /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  filter: blur(1px);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Statement = styled.h1`
  color: ${ props => props.theme.brandWhite};
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 60px;
  font-weight: 700;
  font-family: 'Muli', sans-serif;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`


const App = () => {
  return <Root>
    <Section>
      <Bg />
      <Row>Blink</Row>
      <Row>
        <Col>
          <Row>
            <Statement>Budget</Statement>
          </Row>
          <Row>
            <Statement>Planner</Statement>
          </Row>
        </Col>
      </Row>
      <Row>App Store</Row>
      <Row>Google Play</Row>
      <Row>Learn more</Row>
    </Section>
    <Section>
      <Row>

      </Row>

    </Section>
  </Root>
}

export default compose(

)(App)
