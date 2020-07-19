import {FETCH_COUNTRIES, FETCH_COUNTRY} from "../actions/action-type";

export const countryReducer =  (state = [], action) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return [...action.payload];
        default:
            return state;
    }
};

export const currentCountryReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_COUNTRY:
            return {...action.payload}
        default:
            return state;
    }
}
