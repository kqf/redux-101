import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";


export interface Order {
    id: number,
    description: string,
    dispatched: boolean,
}

interface Action<T> {
    type: string,
    payload: T
}

const slice = createSlice({
    name: "orders",
    initialState: [] as Array<Order>,
    reducers: {
        addedItem: (
            orders: Array<Order>,
            action: Action<{ description: string }>
        ) => {
            orders.push({
                id: orders.length,
                description: action.payload.description,
                dispatched: false,

            });
        },
        dispatchedItem: (
            orders: Array<Order>,
            action: Action<{ id: number }>
        ) => {
            const index: number = orders.findIndex(
                order => order.id === action.payload.id
            )
            orders[index].dispatched = true;
        },
        removedItem: (
            orders: Array<Order>,
            action: Action<{ id: number }>
        ) => {
            return orders.filter(order => order.id !== action.payload.id);
        }

    }
});

export const selectOrdersLength = createSelector(
    (state: RootState) => <Array<Order>> state.entities.orders,
    (orders: Array<Order>) => <number> orders.length
)

export const { addedItem, dispatchedItem, removedItem } = slice.actions;
export default slice.reducer;
