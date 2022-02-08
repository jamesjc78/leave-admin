import axios from "axios";

// GET ~/user
export const getUsers = async () => {
  const response = await axios.get("/user", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "2ce81eb0-a49a-11ea-b556-f7c9f9f425bc",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = response.data;
  return data;
};

// GET ~/user/:username
export const getUser = async (username) => {
  const response = await axios.get(`/user/${username}`);
};

// POST ~/user
export const addUser = async () => {};

// PUT ~/user/:username
export const updateUser = async () => {};

// DELETE ~/user/:username
export const deleteUser = async () => {};
