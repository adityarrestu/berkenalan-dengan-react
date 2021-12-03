import React from "react";

function App(props) {
  console.log(props);
  return (
    <>
      <h1>{props.nama}</h1>
      <p>React is Awesome</p>
    </>
  );
}

export default App;
