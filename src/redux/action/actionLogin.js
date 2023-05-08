import * as types from "../actionType";
import axios from "axios";

const getLogin = (token) => ({
    type: types.LOGIN,
    payload: token
})

export const login = (authData) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/login`, authData).then((resp) => {
            console.log("resp", resp)
            dispatch(getLogin(resp.data))
        })
        .catch((error) => {
            console.log(error)
            if (error.response.status === 401) {
                console.log("Hellow")
            }
        })
    }
}