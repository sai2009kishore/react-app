import * as types from './actionTypes';
import axios from 'axios';

export function receiveUser(response) {
    return {
        type: types.FETCH_USERS,
        data: response.data
    };
}

export function fetchUser() {
    return dispatch => {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => dispatch(receiveUser(response)));
    };
}