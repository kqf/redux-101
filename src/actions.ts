import * as act from "./action_types"

interface Action {
    type: string,
    payload: {
        description: string,
        resolved: boolean,
    }
}

export const addItem = (description: string): Action => ({
    type: act.ADDED_TO_CART,
    payload: {
        description: description,
        resolved: false,
    }
})

export const removeItem = (description: string): Action => ({
    type: act.REMOVED_FROM_CART,
    payload: {
        description: description,
        resolved: true,
    }
})
