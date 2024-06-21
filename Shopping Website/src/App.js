import React from "react";
import "./styles/app.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import {Toaster} from 'react-hot-toast'
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Toaster/>
    </Router>
  );
};

export default App;
