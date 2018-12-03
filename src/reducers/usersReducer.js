import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function users(state = initialState.users, action) {
    let newState;
    switch (action.type) {
        case types.FETCH_USERS:
            newState = action.data;
            return newState;
        default: return state;
    }
}