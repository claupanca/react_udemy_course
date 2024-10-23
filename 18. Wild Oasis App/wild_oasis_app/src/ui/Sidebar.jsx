import styled from "styled-components";

import MainNav from "../ui/MainNav";

import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  /* grid-row-start: 2; */
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
