import * as types from "../actionType";


const initialState = {
    actors: [],
    actor: {},
    movies: {},
    loading: true,
};

const actorsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ACTORS:
            return {
                ...state,
                actors: action.payload,
                loading: false,
            };
        case types.GET_CASTS:
            return {
                ...state,
                casts: action.payload,
                loading: false
            }
        case types.DELETE_ACTOR:
        case types.ADD_ACTOR:
        case types.UPDATE_ACTOR:
            return {
                ...state,
                loading: false,
            };
        case types.GET_SINGLE_ACTOR:
            return {
                ...state,
                actor: action.payload,
                loading: false,
            };
            case types.GET_POPPULALITY_ACTOR:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default actorsReducers;