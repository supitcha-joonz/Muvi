import * as types from "../actionType";


const initialState = {
    dropdowns: [],
    dropdown: {},
    loading: true,
};

console.log(initialState);

const dropdownsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BY_MOVIE:
            return {
                ...state,
                dropdowns: action.payload,
                loading: false,
            };
        case types.GET_BY_ACTOR:
            return {
                ...state,
                dropdowns: action.payload,
                loading: false,
            };
        case types.GET_BY_COLLECTION:
            return {
                ...state,
                dropdowns: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default dropdownsReducers;