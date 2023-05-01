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
        axios.get(`${process.env.REACT_APP_API}/actor/all?page=1&size=100`).then((resp) => {
            console.log("resp", resp);
            dispatch(getactors(resp.data));
            // dispatch(getDropdownactor(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

export const addActors = (actor) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/add/actor`);
        axios.post(`${process.env.REACT_APP_API}/add/actor`, actor).then((resp) => {
            console.log("resp", resp);
            dispatch(actorAdded());
            dispatch(loadactors());
        })
        .catch((error) => console.log(error));
    };
};

export const getSingleActors = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/actor/getById/${id}`);
        axios.get(`${process.env.REACT_APP_API}/actor/getById/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getactor(resp.data));
        })
        .catch((error) => console.log(error));
    };
};



export const updateActors = (actor, id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/edit/actor?actorId=${id}`);
        axios.put(`${process.env.REACT_APP_API}/edit/actor?actorId=${id}`, actor).then((resp) => {
            console.log("resp", resp);
            dispatch(actorUpdated());
        })
        .catch((error) => console.log(error));
    };
};

export const deleteActors = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/delete/actor?actorId=${id}`);
        axios.delete(`${process.env.REACT_APP_API}/delete/actor?actorId=${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(actorDeleted());
        })
        .catch((error) => console.log(error));
    };
};