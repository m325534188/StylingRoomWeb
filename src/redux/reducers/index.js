
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const allReducers=combineReducers({
    products:productsReducer,
    cart:cartReducer
})
export default allReducers