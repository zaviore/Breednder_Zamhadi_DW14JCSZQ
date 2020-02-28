import { POST_REGIS } from "../Config/constants";

import { API } from "../Config/api";

export const getRegis = data => {
  console.log("actionnn data", data);
  return {
    type: POST_REGIS,
    payload: async () => {
      const res = await API.post("/register", data);
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
