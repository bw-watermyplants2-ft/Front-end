import axios from "axios";

export function getToken() {
	return localStorage.getItem("token")
}

export default function() { 
  return axios.create({
  baseURL: "https://watermyplants2.herokuapp.com/",
  headers: {
    Authorization: getToken()
  },
  responseType: "json"
})
}
