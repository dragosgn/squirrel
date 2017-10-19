import React from 'react'
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from "react-redux"
import {render} from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import { BrowserRouter as Router} from 'react-router-dom'
import ReduxPromise from "redux-promise";



import budgetReducer from "./reducers/budget"
import fetchBudgetReducer from "./reducers/fetchBudget"


import App from './App'


const rootReducer = combineReducers({
  form: formReducer.plugin({
    budgetCalculation: budgetReducer
  }),
  fetchBudgetReducer
})

const theme = {
  brandBlue: '#3498db',
  brandWhite: 'white',
  brandGrey: "#586065",
  brandGreen: "#2ecc71"
}

let store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
))

const renderApp = (Component) => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <Component />
        </Provider>
      </Router>
    </ThemeProvider>,  document.getElementById('root'))
}

renderApp(App)
