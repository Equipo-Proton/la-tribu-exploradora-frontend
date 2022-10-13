import axios from "axios";

const baseUrl = "http://localhost:8000/api";

// http requests for game implementations
export const apiGame = {
  changePlayPermission(jsonData) {
    return axios.patch(baseUrl + "/game/changepermission", jsonData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  getPlayPermission() {
    return axios
      .get(baseUrl + "/game/getpermission", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCorrection() {
    return axios
      .get(baseUrl + "/game/getcorrection", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((error) => {
        return error.response;
      });
  },

  sendWord(jsonData) {
    return axios.patch(baseUrl + `/game/sendword`, jsonData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  wordNull(jsonData) {
    return axios.patch(baseUrl + `/game/wordnull`, jsonData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  wordStudentNull(jsonData, id) {
    return axios.patch(baseUrl + `/game/wordnull/` + id, jsonData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  sendCorrection(id, jsonData) {
    return axios.patch(baseUrl + `/game/sendcorrection/${id}`, jsonData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  correctionNull(data) {
    return axios.patch(baseUrl + `/game/correctionnull`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  show(jsonData) {
    return axios.patch(baseUrl + `/game/show`, jsonData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  getShow() {
    return axios.get(baseUrl + `/game/getshow`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },
};
