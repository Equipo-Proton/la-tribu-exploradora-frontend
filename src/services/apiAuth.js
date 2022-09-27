import axios from "axios";
import router from "../router/index.js";

const baseUrl = "http://localhost:8000/api";

export const apiAuth = {
  getLogin(formData) {
    axios
      .post(baseUrl + "/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("isAdmin", response.data.user.isAdmin);
        localStorage.setItem("superAdmin", response.data.user.superAdmin);
      })
      .catch((e) => {
        alert("Lo siento... Credenciales incorrectas");

        router.push("/");
      });
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
