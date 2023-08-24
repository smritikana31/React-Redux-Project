import React from 'react'
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WishListItem from './components/WishListItem';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<AllProducts />} />
      <Route path="/WishListItem" element={<WishListItem />} />
      </Routes>
    </BrowserRouter>
  )
}
