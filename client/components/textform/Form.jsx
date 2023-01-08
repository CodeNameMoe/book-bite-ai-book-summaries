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
    <div className={styles.container}>
      <div className={styles.intro}>
        <h2>BookBite: Your Daily Dose of Literary Summaries</h2>
        <p>
          Get quick and easy summaries of your favorite books with our
          user-friendly website app! Simply type in the title of the book you
          want to summarize and hit enter. Within seconds, you'll have a concise
          overview of the main ideas and plot points, saving you time and
          helping you decide if the book is worth a full read. Try it out now
          and discover the magic of BookBite!
        </p>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {/* <input type="text" placeholder="Enter a book title" /> */}
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>{response}</div>
    </div>
  );
}

export default Form;
