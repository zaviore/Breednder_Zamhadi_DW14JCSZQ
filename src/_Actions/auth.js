import { GET_AUTH, GET_LOGIN, REGISTRASI } from "../Config/constants";

import { API, setAuthToken } from "../Config/api";

export const register = data => {
  return {
    type: REGISTRASI,
    payload: async () => {
      const res = await API.post("/register", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);

      return res.data;
    }
  };
};

export const getLogin = data => {
  return {
    type: GET_LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);

      return res.data;
    }
  };
};

// export const getAuth = () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     //// cek token from server

//     return {
//       type: GET_AUTH,
//       payload: async () => {
//         setAuthToken(token);
//         const res = await API.get("/autoauth");

//         return res.data.data;
//       }
//     };
//   } else {
//     ////redirect to login page

//     return {
//       type: "LOGOUT",
//       payload: {}
//     };
//   }
// };
