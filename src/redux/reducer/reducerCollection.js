import * as types from "../actionType";


const initialState = {
    collections: [],
    collection: {},
    data: null,
    loading: true,
};

const collectionsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
                loading: false,
            };
        case types.DELETE_COLLECTION:
        case types.ADD_COLLECTION:
        case types.UPDATE_COLLECTION:
            return {
                ...state,
                loading: false,
            };
        case types.GET_SINGLE_COLLECTION:
            return {
                ...state,
                data: action.payload,
                collection: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default collectionsReducers;