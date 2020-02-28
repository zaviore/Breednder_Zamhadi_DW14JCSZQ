import { GET_AUTH } from "../Config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false,
  isLogin: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AUTH}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_AUTH}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        isLogin: true
      };
    case `${GET_AUTH}_REJECTED`:
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: true
      };

    default:
      return state;
  }
};

export default login;
