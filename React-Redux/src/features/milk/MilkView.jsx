import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./milkSlice";

const MilkView = () => {
  const numOfMilkBottles = useSelector((state) => state.milk.numOfMilkBottles);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No. of MilkBottles: {numOfMilkBottles}</h1>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restocked(2))}>Restock</button>
    </div>
  );
};

export default MilkView;
