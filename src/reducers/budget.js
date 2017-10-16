import numeral from 'numeral'

let initialState = {
  spendings: ""
}

export default function(state=initialState, action){
  switch(action.type) {
    case "@@redux-form/CHANGE":
      return { ...state, spendings:"900"}
    default:
      return state
  }
}
