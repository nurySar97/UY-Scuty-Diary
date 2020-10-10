import { themeReducer } from "../reducers/theme-reducer";

const { createStore, combineReducers } = require("redux");
const { listReducer } = require("../reducers/list-reducer");

let rootReducer = combineReducers({
    listData: listReducer,
    themeData: themeReducer
})

const store = createStore(rootReducer)
window.store = store



export default store