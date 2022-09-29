export const admin = {
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
