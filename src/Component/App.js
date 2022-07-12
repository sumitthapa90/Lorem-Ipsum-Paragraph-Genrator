import React, { useState } from "react";
import data from "../data";
import "../styles/style.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = count;

    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 11) {
      amount = 11;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section">
      <h1>Tried of been boring with Lorem Ipsum</h1>
      <form className="form-submit" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>

      <article className="para">
        {text.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
