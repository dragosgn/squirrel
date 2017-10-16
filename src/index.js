import React from 'react'
import {ThemeProvider} from 'styled-components'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from "react-redux"
import {render} from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'


import App from './App'


const rootReducer = combineReducers({
  form: formReducer.plugin({
    budgetCalculation: budgetReducer
  })
})


const theme = {
  brandBlue: '#242f40',
}

const store = createStore(rootReducer, composeWithDevTools)

const renderApp = (Component) => {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component />
      </Provider>
    </ThemeProvider>,  document.getElementById('root'))
}

renderApp(App)
