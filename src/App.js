import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";

// props children, konten antara komponen tag (open & close tag)
function App(props) {
  console.log(props);

  // menggunakan useState, count: nillai, setCount: fungsi pengubah
  const [count, setCount] = useState(0);

  // menggunakan useEffect untuk mengakses data dari json placeholder
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); //request menggunakan fetch API
      const post = await res.json(); // mengambil data
      console.log(post); // menampilkan pada console
    };

    fetchPost(); // memanggil perintah fetchPost
  });

  // menampilkan nilai useState dan mengubahnya dengan setCount
  return (
    <>
      <Header>{props.nama}</Header>
      <p>React is Awesome</p>
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
