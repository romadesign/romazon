import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import Rating from '../components/Rating';

function ProductScreem (props) {

    const [qty, setQty] = useState(1)
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(detailsProduct(productId));
    }, [dispatch, productId])

    //Cart
    const handleAddTocart = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }

    return (
        <div >
            <div className="back-to-result"><Link to="/">
                <i className="fa fa-arrow-left" aria-hidden="true"> Back to Result</i>
                   </Link></div>
            { loading ? <div>Loading...</div>:
            error? <div>{error}</div>:
            (
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="details-info">
                   
                        <div><h4>{product.name}</h4></div>
                        <Rating
                             rating={product.rating}
                             numReviews={product.numReviews}
                        ></Rating>
                        <div><b>{product.price}</b></div>
                        <div>Description:
                            <div>{product.details}</div>
                        </div>
                </div>
                <div className="details-action">
                        <div>Price: {product.price}</div>
                        <div>Status: {product.countInStock >0 ? 'In stock' : 'Sin stock' }</div>
                        <div>Qty: 
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map(x=> 
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                    )}
                            </select>
                        </div>
                        <div>
                            {product.countInStock > 0 
                            && <button onClick={handleAddTocart} className="button">Add to cart</button> 
                            }
                        </div>
                </div>
            </div>
            )
            }
            
        </div>
    )
}

export default ProductScreem