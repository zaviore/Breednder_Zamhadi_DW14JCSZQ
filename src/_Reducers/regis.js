import { POST_REGIS } from "../Config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false,
  isRegis: false
};

const regis = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_REGIS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${POST_REGIS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        isRegis: true
      };
    case `${POST_REGIS}_REJECTED`:
      return {
        ...state,
        loading: false,
        isRegis: false,
        error: true
      };

    default:
      return state;
  }
};

export default regis;
