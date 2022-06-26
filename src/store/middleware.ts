import { configureStore, Action, Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';

const customLogger: Middleware<{}, RootState> = store => next => action => {
    console.log(store.getState());
    const res = next(action);
    console.log(res);
    return res;
};


export default customLogger;
