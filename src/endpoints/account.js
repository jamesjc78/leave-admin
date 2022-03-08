import axios from "axios";

// POST ~/account/authenticate
export const login = async (username, password) => {
  const response = await axios.post("/account/authenticate", {
    username,
    password,
  });
  const data = response.data;
  return data;
};

// POST ~/account/change-password
export const changePassword = async (oldPassword, newPassword) => {
  const response = await axios.post(
    "https://noaya-leave-api.herokuapp.com/account/change-password",
    {
      oldPassword,
      newPassword,
    }
  );
  const data = response.data;
  return data;
};

// DELETE ~/account/logout
export const logout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await axios.delete(
    "https://noaya-leave-api.herokuapp.com/account/logout",
    { refreshToken }
  );
};

// POST ~/account/token
export const token = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await axios.post(
    "https://noaya-leave-api.herokuapp.com/account/token",
    { refreshToken }
  );
};
