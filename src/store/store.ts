import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orders";
import vendorReducer from "./vendors";

const store = configureStore({
    reducer: combineReducers({
        entities: combineReducers({
            orders: orderReducer,
            vendors: vendorReducer,
        }),
    })
});

export default store;
