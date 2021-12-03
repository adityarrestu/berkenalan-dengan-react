import React from "react";
import PropTypes from "prop-types";

function App(props) {
  console.log(props);
  return (
    <>
      <h1>{props.nama}</h1>
      <p>React is Awesome</p>
    </>
  );
}

App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
