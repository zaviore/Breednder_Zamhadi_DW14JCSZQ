import { GET_AUTH } from "../Config/constants";

import { API } from "../Config/api";

export const getLogin = data => {
  console.log("actionnn data", data);
  return {
    type: GET_AUTH,
    payload: async () => {
      const res = await API.post("/login", data);
      if (res.data.token !== undefined) {
        const token = `Bearer ${res.data.token}`;
        localStorage.setItem("jwToken", token);
        API.defaults.headers.common["autorization"] = token;

        return res.data;
      } else {
        return res.data;
      }
    }
  };
};
