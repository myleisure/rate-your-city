import httpClient from '../http/client';
import {FETCH_CITIES, FETCH_COUNTRIES} from "./action-type";

export const fetchCountries = () => async dispatch => {
    const response = await httpClient.get('/countries');
    dispatch({type: FETCH_COUNTRIES, payload: response.data});
}

export const fetchCitiesInCurrentCountry = idCountry => async dispatch => {

    // TODO change this call later, this is not necessary
    const currentCountryResponse = await httpClient.get(`/countries/${idCountry}`);
    const currentCountry = currentCountryResponse.data;
    if (!currentCountry) {
        dispatch({type: FETCH_CITIES, payload: []})
    } else {
        const response = await httpClient.get('/cities', {params: {country: currentCountry.alphaCode}});
        dispatch({type: FETCH_CITIES, payload: response.data});
    }

}
