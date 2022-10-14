import * as actions from "./actionsType";

export const itemAdded = () => {
    return {
        type: actions.ITEM_ADDED
    }
}

export const itemRemoved = () => {
    return {
        type: actions.ITEM_REMOVED
    }
}