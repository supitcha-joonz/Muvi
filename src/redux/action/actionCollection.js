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
        axios.get(`${process.env.REACT_APP_API}/movie/all`).then((resp) => {
            console.log("resp", resp);
            dispatch(getcollections(resp.data));
            // dispatch(getDropdowncollection(resp.data));
        })
        .catch((error) => console.log(error));
    };
};

// export const getBycollections = (id) => {
//     return function (dispatch) {
//         axios.get(`${process.env.REACT_APP_API}/collection/getbycollectionid/${id}`).then((resp) => {
//             console.log("resp", resp);
//             dispatch(getcollections(resp.data));
//         })
//         .catch((error) => console.log(error));
//     };
// };

export const deletecollection = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/collection/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(collectionDeleted());
            dispatch(loadcollections());
        })
        .catch((error) => console.log(error));
    };
};

export const addcollection = (collection) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/collection`, collection).then((resp) => {
            console.log("resp", resp);
            dispatch(collectionAdded());
            dispatch(loadcollections());
        })
        .catch((error) => console.log(error));
    };
};

export const getSinglecollection = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/collection/${id}`).then((resp) => {
            console.log("resp", resp);
            dispatch(getcollection(resp.data));
            // dispatch(loadcollections());
        })
        .catch((error) => console.log(error));
    };
};

export const updatecollection = (collection, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/collection/${id}`, collection).then((resp) => {
            console.log("resp", resp);
            dispatch(collectionUpdated());
            dispatch(loadcollections());
        })
        .catch((error) => console.log(error));
    };
};