export default function(state={}, action){
  switch(action.type) {
    case "@@redux-form/CHANGE":
      return Object.keys(state).reduce((sum, key) => {return sum + key}, 0)
    default:
      return state
  }
}
