import {combineReducers} from "redux";
import moviesReducers from "./reducer/reducerMovie";
import actorsReducer from "./reducer/reducerActor";
import collectionsReducer from "./reducer/reducerCollection";
import dropdownsReducers from "./reducer/reducerDropdown";
import categorysReducers from "./reducer/reducerCategory";

const rootReducer = combineReducers({
    // users: usersReducers,
    // cars: carsReducers,
    // dropdowns: dropdownsReducers,
    movies: moviesReducers,
    actors: actorsReducer,
    collections: collectionsReducer,
    dropdowns: dropdownsReducers,
    categories: categorysReducers,


});

export default rootReducer;