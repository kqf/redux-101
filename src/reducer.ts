import { Action } from "./actions"
import * as act from "./actionTypes"

interface Order {
    id: number,
    description: string,
    resolved: boolean,
}


export function reducer(state: Array<Order> = [], action: Action) {
    if (action.type == act.ADDED_TO_CART)
        return [
            ...state,
            {
                id: state.length,
                description: action.payload.description,
                resolved: false,
            }
        ]

    if (action.type == act.ADDED_TO_CART)
        return state.filter(order => order.id !== action.payload.id)

}
