import { createAction } from "@reduxjs/toolkit"

interface Order {
    id: number,
    description: string,
    dispatched: boolean,
}

export interface Action {
    type: string,
    payload: any
}

export const addedItem = createAction<{ description: string }>("itemAdded");
export const removedItem = createAction<{ id: number }>("itemRemoved");
export const dispatchedItem = createAction<{ id: number }>("itemDispatched");




export default function reducer(state: Array<Order> = [], action: Action) {
    if (action.type == addedItem.type)
        return [
            ...state,
            {
                id: state.length,
                description: action.payload.description,
                dispatched: false,
            }
        ];

    if (action.type == removedItem.type)
        return state.filter(order => order.id !== action.payload.id);

    if (action.type == dispatchedItem.type)
        return state.map(order => (
            order.id !== action.payload.id ? order : {
                ...order,
                dispatched: true
            }
        ));

    return state;

}
