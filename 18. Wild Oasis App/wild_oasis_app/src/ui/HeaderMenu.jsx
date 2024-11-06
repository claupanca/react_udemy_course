import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GrDocumentUser } from "react-icons/gr";

import LogOut from "../features/authentication/LogOut";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeaderMenu = styled.ul`
  /* list-style-type: none; */
  display: flex;
  gap: 0.4rem;

  align-items: center;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <UserAvatar />
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <GrDocumentUser />
        </ButtonIcon>
      </li>
      <li>Dark Mode Toggle</li>
      <li>
        <LogOut />
      </li>
    </StyledHeaderMenu>
  );
}
