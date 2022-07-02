import { Middleware } from "redux"
import { RootState } from "../store"
import * as actions from "../api"
import axios from "axios"

const api: Middleware<{}, RootState> = store => next => async action => {
    if (action.type !== actions.apiCallBegan.type) {
        return next(action)
    }
    try {
        const response = await axios.request({
            baseURL: action.payload.baseUrl,
            url: action.payload.url,
            method: action.payload.method,
            data: action.payload.data,
        })
        store.dispatch(actions.apiCallSuccess(response.data));
    } catch (error) {
        store.dispatch(actions.apiCallFailed(error as string));
    }

}

export default api;
