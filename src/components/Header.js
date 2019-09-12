import React from "react";

const Header = props => {
  return (
    <header>
      <img
        src="https://dummyimage.com/35x35/fff/000"
        alt="logo"
        className="logo"
      />
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
