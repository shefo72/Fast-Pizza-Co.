import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SerachOrder />
      <p>Ahmed Sherif</p>
    </header>
  );
}

export default Header;
