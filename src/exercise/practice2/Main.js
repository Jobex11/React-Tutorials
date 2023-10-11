import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Books from "./books";

const url = "https://course-api.com/react-tours-project";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const removeBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const books = await response.json();
      setLoading(false);
      setBooks(books);
    } catch (error) {
      setLoading(false);
      console.log(error);
  };

  {
    /*  MY USEEFFECT IS HERE */
  }
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (books.length === 0) {
    return (
      <main>
        <div>
          <h2> no Books left </h2>
          <button onClick={() => fetchBooks()}>refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Books books={books} removeBook={removeBook} />

    </main>
  );
};

export default Main;
