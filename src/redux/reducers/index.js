import { combineReducers } from "redux";
import { CakeReducer } from "./CakeReducer";

export const rootReducer = combineReducers({ cake: CakeReducer });
