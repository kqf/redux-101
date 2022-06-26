import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import orderReducer from "./orders";
import vendorReducer from "./vendors";
import ownerReducer from "./owners";
import customLogger from "./middleware";

const store: Store = configureStore({
    reducer: combineReducers({
        entities: combineReducers({
            orders: orderReducer,
            vendors: vendorReducer,
            owners: ownerReducer,
        }),
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(customLogger),

});

export type RootState = ReturnType<typeof store.getState>;
export default store;
