import axios from "axios";

// GET ~/leave/:username
export const getLeave = async (username) => {
  const response = await axios.put(
    `/leave/${username}`,
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
