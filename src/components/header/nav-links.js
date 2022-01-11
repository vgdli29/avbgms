import React from "react";
import { Link } from "gatsby";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link to="/">Home</Link>        
      </li>
      <li>
        <Link to="/about">What We Do</Link>        
      </li>
      {/*<li className="dropdown">
        <Link to="/About">Causes</Link>
        <button aria-label="dropdown toggler" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-down"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/mission">Mission and Vision</Link>
          </li>
          <li>
            <Link to="/values">Values</Link>
          </li>
          <li>
            <Link to="/docs">Statutory documents</Link>
          </li>
          <li>
            <Link to="/volunteers">Team</Link>
          </li>
        </ul>
        </li> */}
      <li className="dropdown">
        <Link to="#">Resources</Link>
        <button aria-label="dropdown toggler" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-down"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </li>
      {/* will be made availabe after data is received
      <li>
        <Link to="/news">News</Link>        
      </li> */}
      <li>
        <Link to="/become-volunteer">Become a Volunteer</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
