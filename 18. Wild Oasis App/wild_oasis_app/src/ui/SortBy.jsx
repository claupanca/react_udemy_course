import { useSearchParams } from "react-router-dom";
import Menus from "./Menus";
import { GrDown, GrUp } from "react-icons/gr";

import { capizalize } from "../utils/helpers";

export default function SortBy({ options }) {
  const [urlState, setUrlState] = useSearchParams("");

  const order = urlState.get("order");
  const sortBy = urlState.get("sortBy");
  // console.log("order", order);
  // console.log("sortby", sortBy);

  function handlerSort(fieldName) {
    // console.log("fieldName", fieldName);
    // console.log("order", urlState.get("order") ? "from URL" : "asc");

    // const order = urlState.get("order");
    const newOrder = order === "asc" ? "desc" : "asc";

    // console.log("newOrder", newOrder);

    //   setting 2 params, so that we don't delete the Filter Param
    urlState.set("sortBy", fieldName);
    urlState.set("order", newOrder);
    setUrlState(urlState);
  }

  return (
    <Menus>
      <Menus.Toggle />
      <Menus.List>
        {options.map((option) => (
          <Menus.Button
            onClick={() => handlerSort(option)}
            icon={
              sortBy === option && (order === "asc" ? <GrUp /> : <GrDown />)
            }
            active={sortBy === option}
            key={option}
          >
            {capizalize(option)}
          </Menus.Button>
        ))}
        {/* <Menus.Button
          onClick={() => handlerSort("Adults")}
          icon={
            sortBy === "Adults" && (order === "asc" ? <GrUp /> : <GrDown />)
          }
          active={sortBy === "Adults"}
        >
          Adults
        </Menus.Button>
        <Menus.Button onClick={() => handlerSort("Children")}>
          Children
        </Menus.Button>
        <Menus.Button>Price</Menus.Button>
        <Menus.Button>Discount</Menus.Button> */}
      </Menus.List>
    </Menus>
  );
}
