import {reducer as formReducer} from "redux-form";
import {combineReducers} from "redux";
import {countryReducer, currentCountryReducer} from "./CountryReducers";
import {citiesReducer} from "./cityReducers";

export default combineReducers({
    form: formReducer,
    countries: countryReducer,
    currentCountry: currentCountryReducer,
    cities: citiesReducer
});
