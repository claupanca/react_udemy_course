import styled from "styled-components";

import Logo from "../ui/Logo";
import LogOut from "../features/authentication/LogOut";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  grid-column: 1 / end;

  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <LogOut />
    </StyledHeader>
  );
}

export default Header;
