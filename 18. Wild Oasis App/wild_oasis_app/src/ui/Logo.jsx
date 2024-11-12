import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
`;

function Logo() {
  const { theme } = useDarkMode();

  return (
    <StyledLogo>
      <Img
        src={
          theme === "light"
            ? "/data/img/logo-light.png"
            : "/data/img/logo-dark.png"
        }
        alt="logo"
      />
    </StyledLogo>
  );
}

export default Logo;
