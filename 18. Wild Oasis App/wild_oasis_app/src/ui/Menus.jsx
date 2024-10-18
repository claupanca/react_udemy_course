import PropTypes from "prop-types";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

import { GrMore } from "react-icons/gr";
import useOutsideClick from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

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

  /* transition: all 5s ease-out; */
`;

const StyledButton = styled.button`
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
      margin: 0.4rem;
      border-radius: var(--border-radius-sm);
    `}

  width: 100%;
  text-align: left;
  /* background: none; */
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

// 2. Create Context
const MenusContext = createContext("");

//  1.  Parent Element
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handlePosition(e) {
    // console.log("state", position);
    // console.log("e", e.getBoundingClientRect().x);
    setPosition({
      x:
        window.innerWidth -
        e.getBoundingClientRect().x -
        e.getBoundingClientRect().width,
      y: e.getBoundingClientRect().y + e.getBoundingClientRect().height + 8,
    });
    // setPosition({ x: 0, y: 0 });
  }

  return (
    <MenusContext.Provider
      value={{
        openId: openId,
        open: open,
        close: close,
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

function Toggle({ id }) {
  const { handlePosition, open, close, openId } = useContext(MenusContext);

  function handleClick(e) {
    // console.log("openId", openId, "id", id);
    openId === "" || openId !== id ? open(id) : close();
    // console.log("e.target", e.target.closest("button"));
    // we get the closest BUTTON as target
    handlePosition(e.target.closest("button"));
  }

  return (
    <StyledToggle onClick={handleClick}>
      <GrMore />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { position, openId, close } = useContext(MenusContext);

  // we use the useOutsideClick to close the MENU
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  // console.log("Position", position.x, position.y);

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, onClick, icon, active }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    // we use OPTIONAL CHAINING - if onClick exists
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick} active={active}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

// 4. Make children properties of the Parent
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

const childrenProp = { children: PropTypes.node };
Menus.propTypes = childrenProp;
Menu.propTypes = childrenProp;
Toggle.propTypes = { id: PropTypes.number };
List.propTypes = {
  ...childrenProp,
  position: PropTypes.object,
  id: PropTypes.number,
};
Button.propTypes = {
  ...childrenProp,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  active: PropTypes.bool,
};

export default Menus;
