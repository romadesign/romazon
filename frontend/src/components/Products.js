import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { listProducts } from '../actions/productActions'
import Rating from '../components/Rating'


function Products () {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts())
    },[])

  function truncate(string, text) {
    return string.length > text ? string.substr(0, text-1) + '...' : string;
  }

    return (
            <>
             {loading ? (
              <div>Loading...</div>
                ) : error ? (
                  <div>{error}</div>
                ) : (
                 <div>
                   <div>
                   <div className="content-products">
                      <div className="products">
                      {/* {products.slice(0, 4).map((product) => ( */}
                         {products.map((product) => (
                          <div key={product._id}>
                            <div className="product">
                            <div className="product-brand">{product.brand}</div>
                              <Link to={'/product/' + product._id}>
                                <img
                                  className="product-image"
                                  src={product.image}
                                  alt="product"
                                />
                              </Link>
                              <div className="product-name">
                                <Link to={'/product/' + product._id}>{product.name}</Link>
                              </div>
                              <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                              ></Rating>
                              <div  className="detail-poduct">
                                
                                {
                                  truncate( product.details , 60)
                                }
                              </div>
                              <div className="product-price">${product.price}</div>
                              <div className="product-rating">
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <img className="content-img-product" src="https://links.papareact.com/dyz" alt=""/>
               
                </div>
            </div>
                 </div>
            )}


                 
        </>
    )
}

export default Products