import axios from "axios"

export default function() {
  const url = "http://localhost:2000/budget"
  const request = axios.get(url)
  return {
    type: "FETCH_BUDGET",
    payload: request
  }
}
