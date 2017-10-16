import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {ThemeProvider} from 'styled-components'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
