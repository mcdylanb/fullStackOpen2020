import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

const promise = axios.get("http://localhost:3001/notes");
console.log(promise);

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);

const App = () => {
  return (
    <div>
      <p>testing</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
