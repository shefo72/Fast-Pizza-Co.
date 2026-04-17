import { useDispatch, useSelector } from "react-redux";

import LinkButton from "./../../UI/LinkButton";
import Button from "./../../UI/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-10 flex gap-x-5">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
