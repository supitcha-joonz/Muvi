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



export const loadmovies = (page=1, size=5) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/movie/all`);
        axios.get(`${process.env.REACT_APP_API}/movie/all?page=${page}&size=${size}`).then((resp) => {
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

export const addMovies = (movie) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/add/movie`);
        axios.post(`${process.env.REACT_APP_API}/add/movie`, movie).then((resp) => {
            console.log("resp", resp);
            dispatch(movieAdded());
            dispatch(loadmovies());
        })
        .catch((error) => console.log(error));
    };
};

export const getSingleMovies = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/movie/getById/${id}`);
        axios.get(`${process.env.REACT_APP_API}/movie/getById/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getmovie(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

export const updateMovies = (movie, id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/edit/movie?movieId=${id}}`);
        axios.put(`${process.env.REACT_APP_API}/edit/movie?movieId=${id}`, movie).then((resp) => {
            console.log("resp", resp);
            dispatch(movieUpdated());
        })
        .catch((error) => console.log(error));
    };
};

export const deleteMovies = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/delete/movie?movieId=${id}`);
        axios.delete(`${process.env.REACT_APP_API}/delete/movie?movieId=${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(movieDeleted());
        })
        .catch((error) => console.log(error));
    };
};

