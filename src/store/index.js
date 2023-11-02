import { createStore } from "redux";
import rootReducer from "../SP/reducers/index";

const store = createStore(rootReducer);

export default store;
