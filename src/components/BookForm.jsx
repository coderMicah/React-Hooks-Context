import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "ADD_BOOK", book: data });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} type="text" placeholder="Book Title" />
      <input {...register("author")} type="text" placeholder="Book Author" />

      <button type="submit">Create Book</button>
    </form>
  );
};

export default BookForm;
