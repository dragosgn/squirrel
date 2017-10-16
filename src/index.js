import React from 'react'
import {ThemeProvider} from 'styled-components'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from "react-redux"
import {render} from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import budgetReducer from "./reducers/budget"


import App from './App'


const rootReducer = combineReducers({
  form: formReducer.plugin({
    budgetCalculation: budgetReducer
  })
})

const theme = {
  brandBlue: '#3498db',
  brandWhite: 'white',
  brandGrey: "#586065"
}

let store = createStore(rootReducer, composeWithDevTools())

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
