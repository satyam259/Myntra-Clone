import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import { useState } from "react";

const Header = ({ setSearch }) => {
  const bag = useSelector((state) => state.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="/">Men</a>
        <a href="/">Women</a>
        <a href="/">Kids</a>
        <a href="/">Home & Living</a>
        <a href="/">Beauty</a>
        <a href="/">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon"></span>
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <div className="action_container" to="/bag">
          <FaBagShopping />
          <Link to="/bag">
            <span className="action_name">Bag</span>
          </Link>
          <span className="bag-item-count">{bag.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
