import Button from "../../UI/Button";
import { formatCurrency } from "./../../utils/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-x-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small"> Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
