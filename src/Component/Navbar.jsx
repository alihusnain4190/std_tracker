import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Northcoder</h1>
      </Link>
      <div>
        <Link to="/students">All Student</Link>
      </div>
      <div>
        <Link to="/graduate">Graduate</Link>
      </div>
      <div>
        <Link to="/block">Block</Link>
      </div>
    </div>
  );
};

export default Navbar;
