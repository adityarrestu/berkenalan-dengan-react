import React from "react";
import PropTypes from "prop-types";

// props children pada komponen
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
