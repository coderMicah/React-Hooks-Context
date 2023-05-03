import { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    //this fn initializes the state withe local data in the localstorage if no data is present
    // it just sets the state(books) to an empty array
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  // const [books, setBooks] = useState([
  //   { title: "The Way Of The Wind", author: "Patrick Bamford", id: 1 },
  //   { title: "The Final Empire", author: "Jumong", id: 2 },
  // ]);

  // const addBook = ({ title, author }) => {
  //   setBooks([...books, { title, author, }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    // <BookContext.Provider value={{ books, setBooks, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookContextProvider };
