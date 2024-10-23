import  {combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';

import { productsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    products: productsReducer,
});

let initalState = {
   
}



const middleWare = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middleWare)
);

export default store
