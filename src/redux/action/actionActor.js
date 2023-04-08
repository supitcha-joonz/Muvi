import * as types from "../actionType";
import axios from "axios";

const getDropdownactor = (actors) => ({
    type: types.GET_BY_ACTOR,
    payload: actors,
});

const getactors = (actors) => ({
    type: types.GET_ACTORS,
    payload: actors,
});

const actorDeleted = () => ({
    type: types.DELETE_ACTOR,
});

const actorAdded = () => ({
    type: types.ADD_ACTOR,
});

const actorUpdated = () => ({
    type: types.UPDATE_ACTOR,
});

const getactor = (actor) => ({
    type: types.GET_SINGLE_ACTOR,
    payload: actor,
});

export const loadactors = () => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/actor/all`);
        axios.get(`${process.env.REACT_APP_API}/actor/all`).then((resp) => {
            console.log("resp", resp);
            dispatch(getactors(resp.data));
            // dispatch(getDropdownactor(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

// export const getByactors = (id) => {
//     return function (dispatch) {
//         axios.get(`${process.env.REACT_APP_API}/actor/getbyactorid/${id}`).then((resp) => {
//             console.log("resp", resp);
//             dispatch(getactors(resp.data));
//         })
//         .catch((error) => console.log(error));
//     };
// };

export const deleteactor = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/actor/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(actorDeleted());
            dispatch(loadactors());
        })
        .catch((error) => console.log(error));
    };
};

export const addactor = (actor) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/actor`, actor).then((resp) => {
            console.log("resp", resp);
            dispatch(actorAdded());
            dispatch(loadactors());
        })
        .catch((error) => console.log(error));
    };
};

export const getSingleactor = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/actor/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getactor(resp.data));
            // dispatch(loadactors());
        })
        .catch((error) => console.log(error));
    };
};

export const updateactor = (actor, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/actor/${id}`, actor).then((resp) => {
            console.log("resp", resp);
            dispatch(actorUpdated());
            dispatch(loadactors());
        })
        .catch((error) => console.log(error));
    };
};