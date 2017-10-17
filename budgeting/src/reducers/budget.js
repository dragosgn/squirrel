import numeral from 'numeral'

let initialState = {
  spendings: ""
}

export default function(state=initialState, action){
  switch(action.type) {
    case "@@redux-form/CHANGE":
      return { ...state, spendings: numeral(100).value()}
    case "FETCH_BUDGET":
      return { ...state }
    default:
      return state
  }
}
