import {FETCH_CITIES} from "../actions/action-type";

export const citiesReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CITIES:
            const newState = {};
            newState[action.payload.countryId] = [...action.payload.cities]
            return newState;
        default:
            return state;
    }
}
