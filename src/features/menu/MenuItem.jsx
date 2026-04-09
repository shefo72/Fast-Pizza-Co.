import { formatCurrency } from "../../utils/helpers";
import Button from "./../../UI/Button";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          {soldOut ? "" : <Button type="small">Add To Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
