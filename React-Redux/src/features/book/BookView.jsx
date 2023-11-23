import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./bookSlice";

const BookView = () => {
  const numOfBooks = useSelector((state) => state.book.numOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No. of Books : {numOfBooks}</h1>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restocked(2))}>Restock</button>
    </div>
  );
};

export default BookView;
