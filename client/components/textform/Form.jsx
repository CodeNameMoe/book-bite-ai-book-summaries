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
  console.log(response);
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Book Summaries</h1>
        <h2>Your Daily Dose of Literary Summaries</h2>
        <p>
          Get quick and easy summaries of your favorite books with our
          user-friendly website app! Simply type in the title of the book you
          want to summarize and hit enter. Within seconds, you&apos;ll have a
          concise overview of the main ideas and plot points, saving you time
          and helping you decide if the book is worth a full read. Try it out
          now and discover the magic of BookBite!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            placeholder="Enter A Book Title Here 📖"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          {/* <input type="text" placeholder="Enter a book title" /> */}
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={styles.response}>
        <h2>{message}</h2>
        <p>{response}</p>
      </div>
      <div className={styles.love}>Made with ❤️ by Mohamed Ali </div>
    </div>
  );
}

export default Form;
