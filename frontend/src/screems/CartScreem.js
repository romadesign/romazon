import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

 function CartScreen(props) {

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    

    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const dispatch = useDispatch()


    const removeFromCartHandler  = (productId) => {
        dispatch(removeFromCart(productId));
    }


    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[ dispatch, productId, qty ])

    const checkoutHandler = () => {
        props.history.push('/gninsi?redirect=shipping')
    }

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>Price</div>
                    </li>
                    {
                        cartItems.length === 0 
                        ? <div>Cart is empty</div>
                        : (
                            <ul>
                                {
                                    cartItems.map(item =>
                                        <li key={item.product}>
                                            <div className="cart-image">
                                                <img src={item.image} alt={item.image} />
                                            </div>
                                            <div className="cart-name">
                                                <div>
                                                    <Link to={"/product/" + item.product}>
                                                      {item.name}
                                                    </Link>
                                                </div>
                                                <div className="cart-qty">
                                                    Qty:
                                                    <select 
                                                    value={item.qty} 
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                      {[...Array(item.countInStock).keys()].map(x =>
                                                        (<option key={x + 1} value={x + 1}>{x + 1}</option>)
                                                      )}
                                                    </select>
                                                    <i className="fa fa-trash-o button-delete" aria-hidden="true" onClick={() => removeFromCartHandler(item.product)}></i>
                                                  </div>
                                            </div>
                                            <div className="cart-price">
                                                {item.price}
                                            </div>
                                        </li>    
                                    )
                                }
                            </ul>
                        )
                    }
                </ul>
            </div>
            <div className="cart-action">
              <h3>
                Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) :$ 
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h3>
              <button  onClick={checkoutHandler}  className="button primary full-width" disabled={cartItems.length === 0}>
                Proceed to Checkout
              </button>

            </div>
        </div>
    )
}

export default CartScreen