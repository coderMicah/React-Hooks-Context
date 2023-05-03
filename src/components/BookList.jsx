import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books To Read.Hello Free Time :)</div>
  );
};

export default BookList;
