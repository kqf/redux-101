import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import orderReducer from "./orders";
import vendorReducer from "./vendors";

const store: Store = configureStore({
    reducer: combineReducers({
        entities: combineReducers({
            orders: orderReducer,
            vendors: vendorReducer,
        }),
    })
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
