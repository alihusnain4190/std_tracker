import React from "react";
import { Link } from "@reach/router";
const Footer = () => {
  return (
    <footer>
      <hr className="footer__hr"></hr>
      <div className="footer">
        <div>
          <p className="footer__p">
            Created By <span className="footer__span">Ali Husnain</span>
          </p>
        </div>
        <div>
          <Link
            to="https://www.facebook.com/northcoders/"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-facebook"></i>
          </Link>
          <Link
            to="https://twitter.com/northcoders"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-twitter"></i>
          </Link>
          <Link
            to="https://www.youtube.com/northcoders"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-youtube"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
