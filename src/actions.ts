import * as act from "./actionTypes"

export interface Action {
    type: string,
    payload: any
}

export const addItem = (description: string): Action => ({
    type: act.ADDED_TO_CART,
    payload: {
        description: description,
    }
})

export const removeItem = (id: number): Action => ({
    type: act.REMOVED_FROM_CART,
    payload: {
        id: id,
    }
})

export const dispatchItem = (id: number): Action => ({
    type: act.DISPATCH_ORDER,
    payload: {
        id: id,
        dispatched: true,
    }
})
