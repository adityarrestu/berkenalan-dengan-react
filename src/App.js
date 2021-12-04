import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";

// props children, konten antara komponen tag (open & close tag)
function App(props) {
  console.log(props);
  return (
    <>
      <Header>{props.nama}</Header>
      <p>React is Awesome</p>
    </>
  );
}

// validasi input, prop types dengan tipe data
App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
