import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import api, { customLogger, toast } from "./middleware";
import orderReducer from "./orders";
import ownerReducer from "./owners";
import vendorReducer from "./vendors";

export const buildStore: () => Store = () => configureStore({
    reducer: combineReducers({
        entities: combineReducers({
            orders: orderReducer,
            vendors: vendorReducer,
            owners: ownerReducer,
        }),
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(customLogger)
            .concat(toast)
            .concat(api),
});


const store: Store = buildStore()
export type RootState = ReturnType<typeof store.getState>;
export default store;
