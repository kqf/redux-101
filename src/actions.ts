import * as act from "./actionTypes"

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
