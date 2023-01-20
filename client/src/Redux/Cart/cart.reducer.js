import { AddAddress, AddCart } from "./cart.types";

const initialState = { onCart: false, onAdd: false }
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AddCart: return { ...state, onCart: true };
        case AddAddress: return { ...state, onAdd: true, onCart: true };
        default: return state;
    }
}
