import React from "react";

const Footer = () => {
  let today = new Date();
  return (
    <footer>
      <h3>&copy; {today.getFullYear()}</h3>
    </footer>
  );
};

export default Footer;
