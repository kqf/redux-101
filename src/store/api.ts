import { createAction } from "@reduxjs/toolkit";

export interface APICall {
    baseURL: string,
    url: string,
    method: string,
    data: any,
}

export const apiCallBegan = createAction<APICall>("api/CallBegan");
export const apiCallSuccess = createAction<any>("api/CallBegan");
export const apiCallFailed = createAction<string>("api/CallFailed");
