import * as types from "../actionType";

const initialState = {
    token: {},
    data: null,
    loading: true
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                token: action.payload,
                loading: false
            }
    }
}