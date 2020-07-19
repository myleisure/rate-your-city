import {FETCH_CITIES} from "../actions/action-type";

export const citiesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CITIES:
            return [...action.payload];
        default:
            return state;
    }
}
