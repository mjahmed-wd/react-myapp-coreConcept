import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const nayoks = ["Anwar", "Shuhom", "Bulbul", "Jafor", "Shakil"];
  const products = [
    { name: "Photoshop", price: "99.99" },
    { name: "Illastrator", price: "59.99" },
    { name: "Iconbox", price: "19.99" },
  ];
  const productNames = products.map((product) => product.name);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a rect Person</p>
        <Counter></Counter>
        <Users></Users>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}

        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="Bappa" nayika="Nai"></Person>
        <Person name="Shakib" nayika="Shabnoor"></Person>
      </header>{" "}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  return (
    <div style={productStyle}>
      <h4>Name:{props.product.name}</h4>
      <h6>{props.product.price}</h6>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const style = { border: "1px solid yellow", margin: "10px", padding: "10px" };

  return (
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  );
}

export default App;
