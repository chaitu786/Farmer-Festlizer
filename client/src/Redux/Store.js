import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { AppReducer } from "./AppReducer/Reducer";



const rootReducer=combineReducers({Reducer:AppReducer})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;
export const store = legacy_createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk)));