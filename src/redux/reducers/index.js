import { combineReducers } from "redux";
import userReducer  from "./userReducer";
import productsReducer from "./productsReducer";

const allReducers = combineReducers({
    users: userReducer,
    products: productsReducer
})                                                                                             

export default allReducers