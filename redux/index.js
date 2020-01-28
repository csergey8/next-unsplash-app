import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { photosReducer, initialState as photosInitialState } from "./photos";
import { uiReducer, initialState as uiInitialState } from './ui';

const reducer = combineReducers({
  photosReducer,
  uiReducer
});

const initialState = {
  photosInitialState,
  uiInitialState
};

export const initializeStore = (state = initialState) =>
  createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
