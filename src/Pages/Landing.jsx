import React from "react";
import landing from "../img/landing.jpg";
import { Link } from "@reach/router";
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__text">
        <h1>Northcoder Student Tracker</h1>
        <p className="landing__text__p">
          Learn to code from anywhere Our coding bootcamps help you become a
          work-ready software developer in just 14 weeks. In a changing world,
          coding skills are in-demand. Our courses will give you all of the
          skills you need to hit the ground running in a career in tech – no
          matter your background.
        </p>
        <Link
          to=""
          style={{ textDecoration: "none" }}
          className="btn btn__read"
        >
          <span className="landing__btn"> Read More &#62;  </span>
        </Link>
      </div>
      <div className="landing__img__wrapper">
        <img className="landing__img" src={landing}></img>
        <div className="after__image"></div>
      </div>
    </section>
  );
};

export default Landing;
