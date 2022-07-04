import { createAction, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Middleware } from "redux";
import { RootState } from "./store";

export interface APICall {
    baseURL: string,
    url: string,
    method: string,
    data: any,
    onSuccess: string,
}

export const apiCallBegan = createAction<APICall>("api/CallBegan");
export const apiCallSuccess = createAction<any>("api/CallBegan");
export const apiCallFailed = createAction<string>("api/CallFailed");

const api: Middleware<{}, RootState> = store => next => async action => {
    if (action.type !== apiCallBegan.type) {
        return next(action)
    }

    const callbeganAction = action as PayloadAction<APICall>;
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
        store.dispatch(apiCallSuccess(response.data));

    } catch (error) {
        store.dispatch(apiCallFailed("Failed"));
    }

}

export default api;
