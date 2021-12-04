import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";

// props children, konten antara komponen tag (open & close tag)
function App(props) {
  console.log(props);

  // menggunakan useState, count: nilai, setCount: fungsi pengubah
  // const [count, setCount] = useState(0);

  const [post, setPost] = useState({}); // mendapatkan data untuk digunakan State
  const [postId, setPostId] = useState(1); // memegang data postId untuk digunakan
  const [isFetching, setIsFetching] = useState(false); // State untuk conditional rendering

  // menggunakan useEffect untuk mengakses data dari json placeholder
  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      ); //request menggunakan fetch API berdasarkan postId
      const post = await res.json(); // mengambil data
      console.log(post); // menampilkan pada console
      setPost(post); // mengambil post ke useState
      setIsFetching(false);
    };

    fetchPost(); // memanggil perintah fetchPost
  }, [postId]); // menambahkan dependencies, berupa array, State atau props

  // menampilkan conditional rendering dengan if conditional
  // if (isFetching) {
  //   return <h1>Loading...</h1>;
  // }

  // menampilkan nilai useState
  return (
    <>
      <Header>{props.nama}</Header>
      <p>React is Awesome</p>
      <p>Post ID: {postId}</p>
      <button onClick={(e) => setPostId(postId + 1)}>Next Post</button>
      {/* {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )} */}
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}

// validasi input, prop types dengan tipe data
App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
