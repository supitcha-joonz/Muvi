import * as types from "../actionType";


const initialState = {
    movies: [],
    movie: {},
    loading: true,
};

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case types.DELETE_MOVIE:
        case types.ADD_MOVIE:
        case types.UPDATE_MOVIE:
            return {
                ...state,
                loading: false,
            };
        case types.GET_SINGLE_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default moviesReducers;