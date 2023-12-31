import React from "react";
import { useState } from "react";

const Book = ({ id, image, info, price, name, removeBook }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          onClick={() => {
            removeBook(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Book;
