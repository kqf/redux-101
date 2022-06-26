import { configureStore, Action, Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';

export const customLogger: Middleware<{}, RootState> = store => next => action => {
    console.log(store.getState());
    const res = next(action);
    console.log(res);
    return res;
};

export const toast: Middleware<{}, RootState> = store => next => action => {
    if(action.type == "error") {
        console.log("error >>> ", action.payload.message)
        return;
    }
    return next(action);
};
