import {createStore,combineReducers} from "redux";
import addJobReducer from "../Reducers/addJob";


export default()=>{
    const store=createStore(
        combineReducers({
            jobs:addJobReducer
        })
    );
    return store;
};


