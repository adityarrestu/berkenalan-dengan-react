import "./styles.css";

export default function App() {
  // deklarasi nilai atribut menggunakan ekspresi JS
  const className = "App";

  // fungsi untuk event button
  const handleClick = (e) => {
    console.log("Button Clicked!");
  };
  const title = "Hello World!";
  const description = "Start editing react to see some magic happen!";
  return (
    /* perbedaan nilai atribut yang bisa diterapkan

    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing react to see some magic happen!</h2>
      <button onCiulck={handleClick}>Click Here!</button>
    </div> 
    */

    // nilai atribut bisa menggunakan ekspresi jS
    // inline style menggunakan objek JS
    <div className={className}>
      <h1 style={{ color: "red", textAlign: "right" }}>{title}</h1>
      <h2>{description}</h2>
      <button onCiulck={handleClick}>Click Here!</button>
    </div>
  );
}
