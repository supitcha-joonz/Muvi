import * as types from "../actionType";


const initialState = {
    categories: [],
    movieCategories: [],
    category: {},
    loading: true,
};

const categorysReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false,
            };
        case types.DELETE_CATEGORY:
        case types.ADD_CATEGORY:
        case types.UPDATE_CATEGORY:
            return {
                ...state,
                loading: false,
            };
        case types.GET_SINGLE_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            };
        case types.GET_MOVIE_CATEGORIES:
            return {
                ...state,
                movieCategories: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export default categorysReducers;