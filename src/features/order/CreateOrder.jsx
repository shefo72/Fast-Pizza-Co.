import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useState } from "react";

import Button from "../../UI/Button";
import EmptyCart from "./../cart/EmptyCart";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/CartSlice";
import store from "./../../store";
import { formatWithCursor } from "prettier";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const userName = useSelector((state) => state.user.userName);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);

  const navigation = useNavigation();
  const formErrors = useActionData();
  const isSubmitting = navigation.state === "submitting";

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={userName}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-lg bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-4 w-4 accent-amber-400 transition-all focus:ring focus:ring-amber-400 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          {/* hidden input to add cart data into the Form */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? "Placing Order..."
              : `Order now from ${formatWithCursor(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// by default the action function receives request object as parameter
export async function action({ request }) {
  // get the form data from the request by calling formData()
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // convert to object

  // prepare the order object , add priority and parse the cart
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority == "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // to clear cart after create order (Do Not overuse this approach)
  store.dispatch(clearCart());

  // if every thing is ok create new order and redirect
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
