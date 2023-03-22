import {combineReducers} from "redux";
import moviesReducer from "./reducer/reducerMovie";
import actorsReducer from "./reducer/reducerActor";
import collectionsReducer from "./reducer/reducerCollection";
import dropdownsReducers from "./reducer/reducerDropdown";

const rootReducer = combineReducers({
    // users: usersReducers,
    // cars: carsReducers,
    // dropdowns: dropdownsReducers,
    movies: moviesReducer,
    actors: actorsReducer,
    collections: collectionsReducer,
    dropdowns: dropdownsReducers,



});

export default rootReducer;