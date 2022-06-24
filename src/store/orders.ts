import { createSelector, createSlice } from "@reduxjs/toolkit"

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
    // @ts-ignore
    state => state.entities.orders,
    // @ts-ignore
    orders => orders.length
)


export const { addedItem, dispatchedItem, removedItem } = slice.actions;
export default slice.reducer;
