import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/CallBegan");
export const apiCallSuccess = createAction<any>("api/CallBegan");
export const apiCallFailed = createAction<string>("api/CallFailed");

