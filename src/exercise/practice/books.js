import React from "react";
import Book from "./Book";

const Books = ({ books, removeBook }) => {
  return (
    <section>
      <div>
        <h2> Books available in Stock</h2>
      </div>
      <div>
        {books.map((book) => {
          return <Book key={book.id} {...book} removeBook={removeBook} />;
        })}
      </div>
    </section>
  );
};

export default Books;
