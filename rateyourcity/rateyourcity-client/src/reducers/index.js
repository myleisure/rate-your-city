import {reducer as formReducer} from "redux-form";
import {combineReducers} from "redux";
import {countryReducer, currentCountryReducer} from "./CountryReducers";

export default combineReducers({
    form: formReducer,
    countries: countryReducer,
    currentCountry: currentCountryReducer
});
