import numeral from 'numeral'

let initialState = {
  spendings: "100"
}

export default function(state=initialState, action){
  switch(action.type) {
    case "@@redux-form/CHANGE":
      Object.keys(state).reduce((sum, key) => {return sum + key}, 0)
      return { ...state, spendings: Object.keys(state).reduce((sum, key) => {return numeral(sum).value + numeral(key[state]).value()}, 0)}
    default:
      return state
  }
}
