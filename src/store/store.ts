import { configureStore } from "@reduxjs/toolkit";
import reducer from "./orders";

const store = configureStore({
    reducer: reducer as any,
});

export default store;
