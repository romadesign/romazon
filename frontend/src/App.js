import React from 'react'
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreem from './screems/HomeScreem';
import ProductScreem from './screems/ProductScreem';
import CartScreen from './screems/CartScreem';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <>
  <BrowserRouter>
   <>
    <div className="grid-container">
      
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">
            <img src="https://links.papareact.com/f90" 
             className="logo-img"/>
          </Link>
        </div>
        <div className="header-links">
          <Link to="/cart"><i className="icon-cart fa fa-shopping-cart" aria-hidden="true"></i>
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            ) }
          </Link>
          <Link to="/">Sign In</Link>
        </div>
      </header>
      
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="/">Pants</a>
          </li>

          <li>
            <a href="/">Shirts</a>
          </li>
        </ul>
      </aside>
      
      <main className="main">
        <Route path="/product/:id" component={ProductScreem} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreem} />
      </main>
    </div>
    </>
    </BrowserRouter>
    </>
  );
}

export default App;
