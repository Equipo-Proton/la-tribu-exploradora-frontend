import axios from "axios";

const baseUrl = "http://localhost:8000/api";

// http requests for authentication
export const apiAuth = {
  login(formData) {
    return axios.post(baseUrl + "/login", formData).catch((error) => {
      return error.response.data.msg;
    });
  },

  logout() {
    return axios.get(baseUrl + "/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  logoutDirector() {
    return axios.get(baseUrl + "/logoutdirector", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  getIsAdmin() {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin === "1") {
      return true;
    }

    return false;
  },

  getSuperAdmin() {
    const superAdmin = localStorage.getItem("superAdmin");

    if (superAdmin === "1") {
      return true;
    }

    return false;
  },
};
