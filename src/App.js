import React from 'react'
import {compose} from "recompose"
import Calculator from "./components/Calculator"


const App = () => {
  return <div>
            <Calculator />
        </div>
}

export default compose(

)(App)
