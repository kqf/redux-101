import { createStore } from "redux";
import reducer from "./orders";


const store = createStore(reducer as any);
export default store;
