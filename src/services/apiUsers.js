import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiUsers = {
  listStudents() {
    return axios.get(baseUrl + "/student/list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  studentsProfile(id) {
    return axios.get(baseUrl + "/student/profile/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  registerStudents(formData) {
    return axios.post(baseUrl + "/student/register", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  deleteStudents(id) {
    return axios.delete(baseUrl + `/student/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  updateStudents(id, formData) {
    return axios.patch(baseUrl + `/student/update/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
