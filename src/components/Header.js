import React from "react";

const Header = props => {
  return (
    <header>
      <img
        src="https://dummyimage.com/35x35/000000/fff&"
        alt="logo"
        className="logo"
      />
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
