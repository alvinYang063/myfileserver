import axios from "axios";
export default axios.create({
  baseURL: "http://74.211.109.80:8081",
  headers: {
    "Content-type": "application/json"
  }
});
