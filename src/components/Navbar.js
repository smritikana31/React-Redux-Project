import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getCartTotal} from "../features/cartSlice";

export default function Navbar() {

  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  return (    
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          LOGO
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " href="/">Home</a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center">
          <Link to="/WishListItem" className="text-reset me-3">
          <i className="fas fa-heart"></i>
          <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>
          </Link>
      </div> 
    </div>
  </nav>

  );
}
