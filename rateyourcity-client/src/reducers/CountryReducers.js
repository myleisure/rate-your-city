import {FETCH_COUNTRIES, FETCH_COUNTRY} from "../actions/action-type";

export const countryReducer =  (state = {}, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            const newState = {}
            action.payload.forEach(c => newState[c.id] = c);
            return {...newState};
        default:
            return state;
    }
};

export const currentCountryReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_COUNTRY:
            return {id: action.payload}
        default:
            return state;
    }
}
