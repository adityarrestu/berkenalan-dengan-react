// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// tipe react element:
// 1. tag name
// const element = <h1>Hello World!</h1>;

// 2. component
// const element2 = <Komponen/>;

// 3. react fragment
/* const element3 = (
  <React.Fragment>
    <h1>Hello</h1>
    <h2>World!</h2>
    <p>React is Amazing</p>
  </React.Fragment>
);
*/

// bisa juga menggunakan shorthand-nya
/* const element3 = (
  <>
    <h1>Hello</h1>
    <h2>World!</h2>
    <p>React is Amazing</p>
  </>
);
*/

const element = <App nama="React App" />;

// mengambil root dalam HTML untuk menempatkan element dalam root
const domElement = document.getElementById("root");

// menggunakan react DOM untuk menampilkan element pada browser
// render berisi 2 argumen, element dan letak element akan ditampilkan
ReactDOM.render(element, domElement);
