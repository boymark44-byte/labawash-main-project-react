import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./laundry_shops/Shop.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import ContactUs from "./pages/ContactUs";
import Shops from "./laundry_shops/Shops";
import data from "./data";
import LaundryShops from "./laundry_shops/LaundryShops";
import Detail from "./laundry_shops/Details";
import ShopLayout from "./laundry_shops/ShopLayout";

const App = () => {
  const cards = data.map((item) => {
    return (
      <Shops
        id={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}>
            About
          </Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}>
            Contact Us
          </Route>
          {/* <Route path="/shops" element={cards} /> */}
          <Route
            path="/laundry-shops"
            element={<LaundryShops>Laundry Shops</LaundryShops>}></Route>
          <Route path="*" element={<Error></Error>}>
            Error
          </Route>
        </Route>
          <Route path="/shops" element={<ShopLayout></ShopLayout>}>
          <Route exact path="/shops" element={cards} />
          <Route exact path="/shops/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
