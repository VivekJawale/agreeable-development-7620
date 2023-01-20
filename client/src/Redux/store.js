import { combineReducers, legacy_createStore } from "redux";
import { reducer as cartReducer } from "./Cart/cart.reducer";
const allReducer= combineReducers({cartReducer})
export const store= legacy_createStore(allReducer)