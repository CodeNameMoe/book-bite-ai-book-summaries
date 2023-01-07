import React from "react";
import styles from "../textform/form.module.css";
import { useState } from "react";

function Form() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* <input type="text" placeholder="Enter a book title" /> */}
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default Form;
