import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/CartSlice";
import Button from "./../../UI/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "./../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  function handelAddtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex w-full justify-start gap-3 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""} `}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-bold">{name}</p>
        <p className="text-[12px] tracking-wider text-stone-500 capitalize italic sm:text-sm">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-semibold text-stone-500 uppercase">
              Sold out
            </p>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handelAddtoCart}>
              Add To Cart
            </Button>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 md:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                CurrentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
