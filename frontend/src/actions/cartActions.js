import Axios from "axios"
// import Cookies from "js-cookie";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get(`/api/products/${productId}`)

        dispatch({
            type: CART_ADD_ITEM, payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }})

        //add product cart and cookie
        // const { cart: { cartItems } } = getState();
        // Cookies.set('cart', 'cartItems', { path: '/' } , JSON.stringify(cartItems))

        localStorage.setItem(
            'cartItems',
            JSON.stringify(getState().cart.cartItems)
          );

    } catch (error) {

    }
}

const removeFromCart = (productId) => async (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId})

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    //deleteproduct cart and cookie
    // const { cart: { cartItems } } = getState();
    // Cookies.remove('cart', 'cartItems', { path: '/' } , JSON.stringify(cartItems))

}

export { addToCart, removeFromCart }