import * as types from "../actionType";
import axios from "axios";

const getDropdownmovie = (movies) => ({
    type: types.GET_BY_MOVIE,
    payload: movies,
});

const getmovies = (movies) => ({
    type: types.GET_MOVIES,
    payload: movies,
});

const movieDeleted = () => ({
    type: types.DELETE_MOVIE,
});

const movieAdded = () => ({
    type: types.ADD_MOVIE,
});

const movieUpdated = () => ({
    type: types.UPDATE_MOVIE,
});

const getmovie = (movie) => ({
    type: types.GET_SINGLE_MOVIE,
    payload: movie,
});



export const loadmovies = () => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/movie/all`);
        axios.get(`${process.env.REACT_APP_API}/movie/all`).then((resp) => {
            console.log("resp", resp);
            dispatch(getmovies(resp.data));
            // dispatch(getDropdowncategory(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

// export const getBymovies = (id) => {
//     return function (dispatch) {
//         axios.get(`${process.env.REACT_APP_API}/movie/getbymovieid/${id}`).then((resp) => {
//             console.log("resp", resp);
//             dispatch(getmovies(resp.data));
//         })
//         .catch((error) => console.log(error));
//     };
// };

export const deletemovie = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/movie/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(movieDeleted());
            dispatch(loadmovies());
        })
        .catch((error) => console.log(error));
    };
};

export const addmovie = (movie) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/movie`, movie).then((resp) => {
            console.log("resp", resp);
            dispatch(movieAdded());
            dispatch(loadmovies());
        })
        .catch((error) => console.log(error));
    };
};

export const getSinglemovie = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/movie/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getmovie(resp.data));
            // dispatch(loadmovies());
        })
        .catch((error) => console.log(error));
    };
};

export const updatemovie = (movie, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/movie/${id}`, movie).then((resp) => {
            console.log("resp", resp);
            dispatch(movieUpdated());
            dispatch(loadmovies());
        })
        .catch((error) => console.log(error));
    };
};