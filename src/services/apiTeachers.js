import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const apiTeachers = {
  registerTeacher(formData) {
    return axios.post(baseUrl + "/teacher/register", formData);
  },

  listTeachers() {
    return axios.get(baseUrl + "/teachers");
  },

  listAllAppUsers() {
    return axios.get(baseUrl + "/listusers");
  },

  teacherProfile(id) {
    return axios.get(baseUrl + "/profile/" + id);
  },

  deleteTeacher(id) {
    return axios.delete(baseUrl + `/teacher/delete/${id}`);
  },

  updateTeacher(id) {
    return axios.patch(baseUrl + `/teacher/update/${id}`);
  },
};
