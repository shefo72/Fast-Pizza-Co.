import { useSelector } from "react-redux";

import { formatCurrency } from "./../../utils/helpers";
import { getCurrentQuantity } from "./CartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const CurrentQuantity = useSelector(getCurrentQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-x-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          CurrentQuantity={CurrentQuantity}
          pizzaId={pizzaId}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
