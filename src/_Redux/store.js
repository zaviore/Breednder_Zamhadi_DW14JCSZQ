import { createStore, combineReducers, applyMiddleware } from "redux";

// import articles from "../_reducers/article";
import species from "../_Reducers/species";
import profile from "../_Reducers/profile";
import auth from "../_Reducers/auth";

import { logger, promise } from "../Middleware";

// Global state
const rootReducers = combineReducers({
  species,
  auth,
  profile
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
