export default function(state={}, action){
  switch(action.type){
    case "FETCH_BUDGET":
      return action.payload.data[0]
    default:
      return state
  }
}
