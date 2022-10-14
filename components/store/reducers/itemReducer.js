import * as actions from "../actionsType";

const initialState = 0;
const ItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ITEM_ADDED: return state+1;
        case actions.ITEM_REMOVED: return state>1?state-1:0;
        default: return state;
    }
}

export default ItemReducer;