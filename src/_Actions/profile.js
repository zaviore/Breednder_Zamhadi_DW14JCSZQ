import { GET_USER } from "../Config/constants";

import { API, setAuthToken } from "../Config/api";

export const getUser = () => {
  return {
    type: GET_USER,
    payload: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.get("/user");
      const { data } = res.data;
      return data;
    }
  };
};
