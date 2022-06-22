import { createAction, createReducer } from "@reduxjs/toolkit"

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



const reducer = createReducer([] as Array<Order>, {
    [addedItem.type]: (orders: Array<Order>, action: Action) => {
        orders.push({
            id: orders.length,
            description: action.payload.description,
            dispatched: false,

        });
    },
    [dispatchedItem.type]: (orders: Array<Order>, action: Action) => {
        const index: number = orders.findIndex(
            order => order.id === action.payload.id
        )
        orders[index].dispatched = true;
    },
    [removedItem.type]: (orders: Array<Order>, action: Action) => {
        return orders.filter(order => order.id !== action.payload.id);
    }

});

export default reducer;
