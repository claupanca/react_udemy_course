import { useSelector } from "react-redux";

export default function User() {
  const userName = useSelector((store) => store.user.user);

  console.log("userName", userName);

  //  if there is no username, we don't render the component
  if (userName == "") return null;

  return <h1 className="hidden text-sm sm:block">{userName}</h1>;
}
