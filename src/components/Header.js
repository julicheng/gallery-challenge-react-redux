import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <img
        src="https://dummyimage.com/35x35/fff/000"
        alt="logo"
        className="logo"
      />
      <Link to={"/"}>
        <h1>{props.title}</h1>
      </Link>
    </header>
  );
};

export default Header;
