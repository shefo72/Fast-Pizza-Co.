import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((p) => {
        return <MenuItem pizza={p} key={p.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
