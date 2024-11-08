import { getMenu } from "../../services/apiRestaurant";

import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function Menu() {
  //  use this to get the data that is provided by the loader
  const dataFromLoader = useLoaderData();
  // console.log("Data from loader", dataFromLoader);

  return (
    <ul className="divide-y divide-green-600 font-semibold">
      {dataFromLoader.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}

export async function menuLoader() {
  // we are using the already created getMenu() function from the services/apiRestaurant.js
  const data = await getMenu();
  // console.log("this is the data from the loader", data);
  return data;
}
