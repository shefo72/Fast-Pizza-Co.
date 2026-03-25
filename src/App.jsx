import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as creatOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: creatOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
  { path: "*", element: <h1>Page Not Found</h1> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
