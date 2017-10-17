import React from 'react'
import {compose} from "recompose"
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Section = styled.div`
  padding: 3rem;
`

const Root = styled.div`

`

const UpperSection = styled.div`
  background-image: url("http://bossfight.co/wp-content/uploads/2017/05/bossfight-free-stock-photos-coffee-shop-people-lights.jpg");
  background-size: cover;                      /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  padding: 9rem 3rem 9rem 3rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.align ? props.align : "flex-start"};
`

const Statement = styled.h1`
  color: ${ props => props.theme.brandWhite};
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 60px;
  font-weight: 700;
  font-family: 'Muli', sans-serif;
`

const ScondaryStatement =styled.h1`
  color: ${ props => props.theme.brandGrey};
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 60px;
  font-weight: 700;
  font-family: 'Muli', sans-serif;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${ props => props.grow ? props.grow : 1};
`

const EvenCol = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  padding: 1rem 1.5rem 1rem 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  :hover {
    background-color: ${ props => props.theme.brandBlue};
    color: white;
  }
  :active {
    background-color: white;
    font-weight: bold;
    color: ${ props => props.theme.brandBlue};
  }
`
const StyledButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  border: solid 2px white;
  border-radius: 2px;
  padding: 1rem;
  cursor: pointer;
  margin: 3rem 0 1rem 0;
  :hover {
    background-color: white;
    font-weight: bold;
    color: ${ props => props.theme.brandBlue};
  }
`

const Logo = styled.h1`
  color: white;
  font-weight: bold;
`

const Footer = styled.div`

`

const App = () => {
  return <Root>
    <UpperSection>
      <Row><Logo>Squirrel</Logo></Row>
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
      <Row><StyledButton>Start Now</StyledButton></Row>
    </UpperSection>
    <Row align="flex-end">
      <StyledLink to="/budgeting">Budgeting</StyledLink>
      <StyledLink to="/forecasting">Forcasting</StyledLink>
      <StyledLink active="true" to="/plans">Download the app</StyledLink>
    </Row>
    <Section>
      <Row>
        <EvenCol>
          <ScondaryStatement>
            Make mobile payments easy
          </ScondaryStatement>
          <p>With Verse, you can now pay and request money from your friends in the time it takes you to send a text message. It’s fast, safe, easy, and free- no hidden fees!</p>
        </EvenCol>
        <EvenCol>
        </EvenCol>
      </Row>
    </Section>
    <Section>
      <Row>
        <EvenCol>
        </EvenCol>
        <EvenCol>
          <ScondaryStatement>
            Create events
          </ScondaryStatement>
          <p>You can also use Verse to create events and share expenses from the get-go. Planning a BBQ? Giving a joint birthday gift? Going on a road trip with your friends? Pool the money together on our app. No counting change, no runs to the ATM machine!With Verse, you can now pay and request money from your friends in the time it takes you to send a text message. It’s fast, safe, easy, and free- no hidden fees!</p>
        </EvenCol>
      </Row>
    </Section>
    <Footer>
    </Footer>
  </Root>
}

export default compose(

)(App)
