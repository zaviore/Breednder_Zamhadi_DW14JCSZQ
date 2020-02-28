import { createStore, combineReducers, applyMiddleware } from "redux";

// import articles from "../_reducers/article";
import species from "../_Reducers/species";
import login from "../_Reducers/auth";
import regis from "../_Reducers/regis";

import { logger, promise } from "../Middleware";

// Global state
const rootReducers = combineReducers({
  species,
  login,
  regis
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
