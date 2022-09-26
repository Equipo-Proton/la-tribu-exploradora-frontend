import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiAuth = {
  getLogin(formData) {
    return axios.post(baseUrl + "/login", formData);
  },

  getLogout() {
    return axios.get(baseUrl + "/logout");
  },
};
