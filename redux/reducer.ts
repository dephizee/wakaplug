import { combineReducers } from 'redux'
export interface AuthData {
    token?: string,
    email?: string,
    verification_code?: string,
}
export interface ActionData {
    type: string,
    payload?: any,
}
const authDataReducer = (state :AuthData = {}, action:ActionData) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return state = {...state, token:action.payload};
        case 'SET_EMAIL':
            return state = {...state, email:action.payload};
        case 'SET_V_C':
            return state = {...state, verification_code:action.payload};
        default: return state
    }
}

const rootReducer = combineReducers({
    authData : authDataReducer
});

export default rootReducer;