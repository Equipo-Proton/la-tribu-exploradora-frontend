import axios from "axios";
import router from "../router/index.js";

const baseUrl = "http://localhost:8000/api";

export const apiAuth = {
  getLogin(formData) {
    return axios.post(baseUrl + "/login", formData);
  },

  getLogout() {
    return axios.get(baseUrl + "/logout");
  },

  getAdminStatus() {
    const isAdmin = localStorage.getItem("isAdmin");

    return isAdmin;
  },

  getSuperAdminStatus() {
    const superAdmin = localStorage.getItem("superAdmin");

    return superAdmin;
  },
};
