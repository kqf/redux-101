import { Action } from "./actions"
import * as act from "./actionTypes"

interface Order {
    id: number,
    description: string,
    dispatched: boolean,
}


export default function reducer(state: Array<Order> = [], action: Action) {
    if (action.type == act.ADDED_TO_CART)
        return [
            ...state,
            {
                id: state.length,
                description: action.payload.description,
                dispatched: false,
            }
        ];

    if (action.type == act.ADDED_TO_CART)
        return state.filter(order => order.id !== action.payload.id);

    if (action.type == act.DISPATCHED_ORDER)
        return state.map(order => {
            order.id !== action.payload.id ? order : {
                ...order,
                dispatched: action.payload.dispatched
            }
        });

    return state;

}
