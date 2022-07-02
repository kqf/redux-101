import { Middleware } from "redux"
import { RootState } from "../store"
import * as actions from "../api"
import axios from "axios"
import { PayloadAction } from "@reduxjs/toolkit";

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
