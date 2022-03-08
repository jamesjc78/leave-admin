import axios from "axios";

// GET ~/user
export const getUsers = async () => {
  const response = await axios.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = response.data;
  return data;
};

// GET ~/user/:username
export const getUser = async (username) => {
  const response = await axios.get(`/user/${username}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = response.data;
  return data;
};
// GET ~/employee/user
export const getUserAdmin = async () => {
  const response = await axios.get(`/employee/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = response.data;
  return data;
};

// POST ~/user
export const addUser = async (
  firstName,
  lastName,
  username,
  password,
  position
) => {
  const response = await axios.post(
    "/user",
    { firstName, lastName, username, password, position },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = response.data;
  return data;
};

// PUT ~/user/:username
export const updateUser = async (
  firstName,
  lastName,
  username,
  password,
  position
) => {
  const response = await axios.put(
    `https://noaya-leave-api.herokuapp.com/user/${username}`,
    { firstName, lastName, password, position },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = response.data;
  return data;
};

// DELETE ~/user/:username
export const deleteUser = async (username) => {
  const response = await axios.delete(
    `https://noaya-leave-api.herokuapp.com/user/${username}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = response.data;
  return data;
};
