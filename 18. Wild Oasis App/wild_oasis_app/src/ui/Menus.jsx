import PropTypes from "prop-types";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

// const StyledButton = styled.button`
//   width: 100%;
//   text-align: left;
//   background: none;
//   border: none;
//   padding: 1.2rem 2.4rem;
//   font-size: 1.4rem;
//   transition: all 0.2s;

//   display: flex;
//   align-items: center;
//   gap: 1.6rem;

//   &:hover {
//     background-color: var(--color-grey-50);
//   }

//   & svg {
//     width: 1.6rem;
//     height: 1.6rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }
// `;

// 2. Create Context
const MenusContext = createContext("");

//  1.  Parent Element
function Menus({ children }) {
  const [position, setPosition] = useState([{ x: 0, y: 0 }]);

  function handlePosition(e) {
    console.log("state", position);
    setPosition(() => [{ x: e.clientX, y: e.clientY }]);
  }

  return (
    <MenusContext.Provider
      value={{
        position: position,
        handlePosition: handlePosition,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

// 3. CHildren Elements
function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

function Toggle({ children }) {
  const { handlePosition } = useContext(MenusContext);

  return <StyledToggle onClick={handlePosition}>{children}</StyledToggle>;
}

function List({ children }) {
  const { position } = useContext(MenusContext);

  console.log("Position", position);

  return (
    <StyledList position={position}>
      <li>List1</li>
      <li>List2</li>
      {children}
    </StyledList>
  );
}

// 4. Make children properties of the Parent
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;

const childrenProp = { children: PropTypes.node };
Menus.propTypes = childrenProp;
Menu.propTypes = childrenProp;
Toggle.propTypes = childrenProp;
List.propTypes = { ...childrenProp, position: PropTypes.object };

export { Menus, Menu, Toggle, List };
