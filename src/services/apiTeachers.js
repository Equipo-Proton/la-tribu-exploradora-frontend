import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiTeachers = {
  registerTeacher(formData) {
    return axios.post(baseUrl + "/teacher/register", formData);
  },

  listTeachers() {
    return axios.get(baseUrl + "/teachers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  listAllAppUsers() {
    return axios.get(baseUrl + "/listusers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  teacherProfile(id) {
    return axios.get(baseUrl + "/profile/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  deleteTeacher(id) {
    return axios.delete(baseUrl + `/teacher/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  updateTeacher(id) {
    return axios.patch(baseUrl + `/teacher/update/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
