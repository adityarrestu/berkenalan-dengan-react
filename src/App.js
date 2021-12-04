import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";

// props children, konten antara komponen tag (open & close tag)
function App(props) {
  console.log(props);

  // menggunakan useState, count: nilai, setCount: fungsi pengubah
  // const [count, setCount] = useState(0);

  // mendapatkan data untuk digunakan State
  const [post, setPost] = useState({});
  // memegang data postId untuk digunakan
  const [postId, setPostId] = useState(1);

  // menggunakan useEffect untuk mengakses data dari json placeholder
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      ); //request menggunakan fetch API berdasarkan postId
      const post = await res.json(); // mengambil data
      console.log(post); // menampilkan pada console
      setPost(post); // mengambil post ke useState
    };

    fetchPost(); // memanggil perintah fetchPost
  }, [postId]); // menambahkan dependencies, berupa array, State atau props

  // menampilkan nilai useState
  return (
    <>
      <Header>{props.nama}</Header>
      <p>React is Awesome</p>
      <p>Post ID: {postId}</p>
      <button onClick={(e) => setPostId(postId + 1)}>Next Post</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

// validasi input, prop types dengan tipe data
App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
