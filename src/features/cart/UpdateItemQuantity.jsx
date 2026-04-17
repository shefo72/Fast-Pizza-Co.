import { useDispatch } from "react-redux";

import { decItemQuantity, incItemQuantity } from "./cartSlice";
import Button from "./../../UI/Button";

function UpdateItemQuantity({ pizzaId, CurrentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItemQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{CurrentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
