import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiUsers = {
  registerUser(formData) {
    return axios.post(baseUrl + "/register", formData);
  },

  listUsers() {
    return axios.get(baseUrl + "/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  userProfile(id) {
    return axios.get(baseUrl + "/userprofile/" + id);
  },

  deleteUser(id) {
    return axios.delete(baseUrl + `/delete/${id}`);
  },

  updateUser(id) {
    return axios.patch(baseUrl + `/update/${id}`);
  },
};
