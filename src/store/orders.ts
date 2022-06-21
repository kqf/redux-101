
interface Order {
    id: number,
    description: string,
    dispatched: boolean,
}

const act = {
    ADDED_TO_CART: "ADDED_TO_CART",
    REMOVED_FROM_CART: "REMOVED_FROM_CART",
    DISPATCHED_ORDER: "REMOVED_FROM_CART",
}

export interface Action {
    type: string,
    payload: any
}

export const addedItem = (description: string): Action => ({
    type: act.ADDED_TO_CART,
    payload: {
        description: description,
    }
})

export const removedItem = (id: number): Action => ({
    type: act.REMOVED_FROM_CART,
    payload: {
        id: id,
    }
})

export const dispatchedItem = (id: number): Action => ({
    type: act.DISPATCHED_ORDER,
    payload: {
        id: id,
    }
})


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
        return state.map(order => (
            order.id !== action.payload.id ? order : {
                ...order,
                dispatched: true
            }
        ));

    return state;

}
