import * as types from "../actionType";
import axios from "axios";



const getcastmovies = (casts) => ({
    type: types.GET_CASTS,
    payload: casts,
});

const categoryDeleted = () => ({
    type: types.DELETE_CATEGORY,
});

const categoryAdded = () => ({
    type: types.ADD_CATEGORY,
});

const categoryUpdated = () => ({
    type: types.UPDATE_CATEGORY,
});

const getcategory = (category) => ({
    type: types.GET_SINGLE_CATEGORY,
    payload: category,
});

const getcastmovie = (cast) => ({
    type: types.GET_SINGLE_CAST,
    payload: cast,
});



export const getCastSingleMovies = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/cast/getById/${id}?isGoogleSearch=false`);
        axios.get(`${process.env.REACT_APP_API}/cast/getById/${id}?isGoogleSearch=false`).then((resp) => {
            console.log("resp", resp);
            dispatch(getcastmovie(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

// export const getBycategorys = (id) => {
//     return function (dispatch) {
//         axios.get(`${process.env.REACT_APP_API}/category/getbycategoryid/${id}`).then((resp) => {
//             console.log("resp", resp);
//             dispatch(getcategorys(resp.data));
//         })
//         .catch((error) => console.log(error));
//     };
// };

// export const deletecategory = (id) => {
//     return function (dispatch) {
//         axios.delete(`${process.env.REACT_APP_API}/genre/${id}`).then((resp) => {
//             console.log("resp", resp);
//             dispatch(categoryDeleted());
//             dispatch(loadcategorys());
//         })
//         .catch((error) => console.log(error));
//     };
// };

// export const addcategory = (category) => {
//     return function (dispatch) {
//         axios.post(`${process.env.REACT_APP_API}/category`, category).then((resp) => {
//             console.log("resp", resp);
//             dispatch(categoryAdded());
//             dispatch(loadcategories());
//         })
//         .catch((error) => console.log(error));
//     };
// };

// export const getSinglecategory = (id) => {
//     return function (dispatch) {
//         axios.get(`${process.env.REACT_APP_API}/genre/${id}`).then((resp) => {
//             console.log("resp", resp);
//             dispatch(getcategory(resp.data));
//             // dispatch(loadcategorys());
//         })
//         .catch((error) => console.log(error));
//     };
// };

// export const updatecategory = (category, id) => {
//     return function (dispatch) {
//         axios.put(`${process.env.REACT_APP_API}/genre/${id}`, category).then((resp) => {
//             console.log("resp", resp);
//             dispatch(categoryUpdated());
//             dispatch(loadcategories());
//         })
//         .catch((error) => console.log(error));
//     };
// };