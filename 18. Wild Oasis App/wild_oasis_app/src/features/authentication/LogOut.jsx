import { GrLogout } from "react-icons/gr";

import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function LogOut() {
  const { userLogout, isPending } = useLogout();

  function handleLogOut() {
    userLogout();
  }

  // console.log("isPending", isPending);
  return (
    <ButtonIcon onClick={handleLogOut} disabled={isPending}>
      {!isPending ? <GrLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
