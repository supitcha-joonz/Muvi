import * as types from "../actionType";


const initialState = {
    casts: [],
    cast: {},
    loading: true,
};

const castsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CASTS:
            return {
                ...state,
                casts: action.payload,
                loading: false,
            };
        case types.GET_SINGLE_CAST:
            return {
                ...state,
                cast: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default castsReducers;