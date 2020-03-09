import { GET_AUTH, GET_LOGIN, REGISTRASI } from "../Config/constants";

// Setup Reducer for Redux

const initState = {
  data: [],
  authenticated: false,
  user: null,
  loading: false,
  error: null,
  isLogin: false
};

const auth = (state = initState, action) => {
  switch (action.type) {
    // case `${GET_AUTH}_PENDING`:
    case `${GET_LOGIN}_PENDING`:
    case `${REGISTRASI}_PENDING`:
      return {
        ...state,
        loading: true
      };
    // case `${GET_AUTH}_FULFILLED`:
    case `${GET_LOGIN}_FULFILLED`:
    case `${REGISTRASI}_FULFILLED`:
      console.log("payload", action.payload);
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: null,
        isLogin: true
      };
    // case `${GET_AUTH}_REJECTED`:
    case `${GET_LOGIN}_REJECTED`:
    case `${REGISTRASI}_REJECTED`:
      console.log("payload", action.payload);
      return {
        ...state,
        loading: false,
        isError: true
      };
    // ------------------------------------------------------------------------

    case "LOGOUT":
      console.log("logout");
      return {
        ...state,
        authenticated: false,
        user: null,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default auth;
