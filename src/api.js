import axios from "axios";

const api = axios.create({
  baseURL: "https://estocar-api.herokuapp.com/",
});

export default api;
