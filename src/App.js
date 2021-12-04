import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";

// props children, konten antara komponen tag (open & close tag)
function App(props) {
  console.log(props);

  // menggunakan useState, count: nillai, setCount: fungsi pengubah
  const [count, setCount] = useState(0);

  // menampilkan nilai useState dan mengubahnya dengan setCount
  return (
    <>
      <Header>{props.nama}</Header>
      <p>Counter: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Berhitung!</button>
    </>
  );
}

// validasi input, prop types dengan tipe data
App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
