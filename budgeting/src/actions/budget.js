import axios from "axios"

const FETCH_BUDGET = "FETCH_BUDGET"

export default function() {
  const url = "localhost"
  const request = axios.get(url)

  return {
    type: FETCH_BUDGET,
    payload: request
  }
}
