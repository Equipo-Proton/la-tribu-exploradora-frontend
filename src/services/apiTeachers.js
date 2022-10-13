import axios from "axios";

const baseUrl = "http://localhost:8000/api";

// http requests for teachers crud
export const apiTeachers = {
  listTeachers() {
    return axios.get(baseUrl + "/teacher/list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  teachersProfile(id) {
    return axios.get(baseUrl + "/teacher/profile/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  registerTeachers(formData) {
    return axios.post(baseUrl + "/teacher/register", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  deleteTeachers(id) {
    return axios.delete(baseUrl + `/teacher/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  updateTeachers(id, formData) {
    return axios.patch(baseUrl + `/teacher/update/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  listAllAppUsers() {
    return axios.get(baseUrl + "/listall", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
