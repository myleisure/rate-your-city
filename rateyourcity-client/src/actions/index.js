import httpClient from '../http/client';
import {FETCH_COUNTRIES, FETCH_COUNTRY} from "./action-type";

export const fetchCountries = () => async dispatch => {
    const response = await httpClient.get('/countries');
    dispatch({type: FETCH_COUNTRIES, payload: response.data});
}

export const fetchCountry = id => async dispatch => {
    const response = await httpClient.get(`/countries/${id}`);
    dispatch({type:FETCH_COUNTRY, payload: response.data});
}
