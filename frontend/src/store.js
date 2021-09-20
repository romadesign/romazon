
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// import Cookies from 'js-cookie'

import cartReducer from './reducers/cartReducers';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'

// const cartItems = Cookies.set('cart', 'cartItems', { path: '/' })


const initialState={ 
  cart: {
    cartItems: localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')): []
  }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;