import { combineReducers } from "redux";
import { allUserReducer } from "./allUserReducer";

//Combining multiple reducers into a single reducer
const reducers = combineReducers({
  allUserReducer: allUserReducer,
});

export default reducers;
