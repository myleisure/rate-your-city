import httpClient from '../http/client';
import {FETCH_CITIES, FETCH_COUNTRIES, FETCH_COUNTRY} from "./action-type";

export const fetchCountries = () => async dispatch => {
    const response = await httpClient.get('/countries');
    dispatch({type: FETCH_COUNTRIES, payload: response.data});
}

export const setCUrrentCountry = country => {
    return {
        type: FETCH_COUNTRY,
        payload: country.alphaCode
    }
}

export const fetchCitiesInCurrentCountry = country => async dispatch => {

    if (!country) {
        dispatch({type: FETCH_CITIES, payload: []})
    } else {
        const response = await httpClient.get('/cities', {params: {country: country.alphaCode}});
        dispatch({type: FETCH_CITIES, payload: {countryId: country.alphaCode, cities: response.data}});

    }

}
