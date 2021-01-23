import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <section className="navbar">
      <div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="nav__logo">Northcoders</h1>
          </Link>
        </div>
      </div>
      <div className="navbar__page__wrapper">
        <div className="nav__list">
          <Link to="/students" style={{ textDecoration: "none" }}>
            <span className="nav__list__item">Students</span>
          </Link>
        </div>
        <div className="nav__list">
          <Link to="/graduate" style={{ textDecoration: "none" }}>
            <span className="nav__list__item"> Graduate</span>
          </Link>
        </div>
        <div className="nav__list">
          <Link to="/block" style={{ textDecoration: "none" }}>
            <span className="nav__list__item"> Block</span>
          </Link>
        </div>
      </div>
      <div>
        <div className="navbar__btn__wrapper">
          <Link
            to="/add"
            className="btn btn__add"
            style={{ textDecoration: "none" }}
          >
            <span className="nav__btn"> Add Student   &#62; </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
