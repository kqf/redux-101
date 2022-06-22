import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"

interface Order {
    id: number,
    description: string,
    dispatched: boolean,
}

export interface Action {
    type: string,
    payload: any
}

const slice = createSlice({
        name: "orders",
        initialState: [] as Array<Order>,
        reducers: {
        addedItem: (orders: Array<Order>, action: Action) => {
            orders.push({
                id: orders.length,
                description: action.payload.description,
                dispatched: false,

            });
        },
        dispatchedItem: (orders: Array<Order>, action: Action) => {
            const index: number = orders.findIndex(
                order => order.id === action.payload.id
            )
            orders[index].dispatched = true;
        },
        removedItem: (orders: Array<Order>, action: Action) => {
            return orders.filter(order => order.id !== action.payload.id);
        }

    }
});


export const {addedItem, dispatchedItem, removedItem} = slice.actions;
export default slice.reducer;
