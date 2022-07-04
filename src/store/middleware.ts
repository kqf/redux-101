import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";
import * as actions from "./api";
import { RootState } from './store';

export const customLogger: Middleware<{}, RootState> = store => next => action => {
    // console.log(store.getState());
    const res = next(action);
    // console.log(res);
    return res;
};

export const toast: Middleware<{}, RootState> = store => next => action => {
    if (action.type == "error") {
        // console.log("error >>> ", action.payload.message)
        return;
    }
    return next(action);
};

const api: Middleware<{}, RootState> = store => next => async action => {
    if (action.type !== actions.apiCallBegan.type) {
        return next(action)
    }

    const callbeganAction = action as PayloadAction<actions.APICall>;
    try {
        const response = await axios.request({
            baseURL: callbeganAction.payload.baseURL,
            url: callbeganAction.payload.url,
            method: callbeganAction.payload.method,
            data: callbeganAction.payload.data,
        })
        store.dispatch({
            "type": callbeganAction.payload.onSuccess,
            "payload": response.data,
        })
        store.dispatch(actions.apiCallSuccess(response.data));

    } catch (error) {
        store.dispatch(actions.apiCallFailed("Failed"));
    }

}

export default api;
