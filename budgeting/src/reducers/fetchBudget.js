export default function(state={}, action){
  switch(action.type) {
    case "FETCH_BUDGET":
      console.log(action)
      return action.payload.data.map(i => i)
    default:
      return state
  }
}
