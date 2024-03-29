import {combineReducers} from "redux";
import moviesReducers from "./reducer/reducerMovie";
import actorsReducers from "./reducer/reducerActor";
import collectionsReducers from "./reducer/reducerCollection";
import dropdownsReducers from "./reducer/reducerDropdown";
import categorysReducers from "./reducer/reducerCategory";
import castsReducers from "./reducer/reducerCast";

const rootReducer = combineReducers({
    // users: usersReducers,
    // cars: carsReducers,
    // dropdowns: dropdownsReducers,
    movies: moviesReducers,
    actors: actorsReducers,
    collections: collectionsReducers,
    dropdowns: dropdownsReducers,
    categories: categorysReducers,
    casts: castsReducers


});

export default rootReducer;