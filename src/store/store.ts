import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import orderReducer from "./orders";
import vendorReducer from "./vendors";
import ownerReducer from "./owners";

const store: Store = configureStore({
    reducer: combineReducers({
        entities: combineReducers({
            orders: orderReducer,
            vendors: vendorReducer,
            owners: ownerReducer,
        }),
    })
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
