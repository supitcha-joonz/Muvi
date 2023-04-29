import * as types from "../actionType";
import axios from "axios";

const getDropdowncollection = (collections) => ({
    type: types.GET_BY_COLLECTION,
    payload: collections,
});

const getcollections = (collections) => ({
    type: types.GET_COLLECTIONS,
    payload: collections,
});

const collectionDeleted = () => ({
    type: types.DELETE_COLLECTION,
});

const collectionAdded = () => ({
    type: types.ADD_COLLECTION,
});

const collectionUpdated = () => ({
    type: types.UPDATE_COLLECTION,
});

const getcollection = (collection) => ({
    type: types.GET_SINGLE_COLLECTION,
    payload: collection,
});

export const loadcollections = () => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/collection/all`);
        axios.get(`${process.env.REACT_APP_API}/collection/all`).then((resp) => {
            console.log("resp", resp);
            dispatch(getcollections(resp.data));
            // dispatch(getDropdowncollection(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

export const addCollections = (collection) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/add/collection`);
        axios.post(`${process.env.REACT_APP_API}/add/collection`, collection).then((resp) => {
            console.log("resp", resp);
            dispatch(collectionAdded());
            dispatch(loadcollections());
        })
        .catch((error) => console.log(error));
    };
};

export const getSingleCollections = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/collection/getById/${id}`);
        axios.get(`${process.env.REACT_APP_API}/collection/getById/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getcollection(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

export const updateCollections = (collection, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/edit/collection/${id}`, collection).then((resp) => {
            console.log("resp", resp);
            dispatch(collectionUpdated());
        })
        .catch((error) => console.log(error));
    };
};


export const deleteCollections = (id) => {
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}/delete/collection?collectionId=${id}`);
        axios.delete(`${process.env.REACT_APP_API}/delete/collection?collectionId=${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(collectionDeleted());
        })
        .catch((error) => console.log(error));
    };
};

