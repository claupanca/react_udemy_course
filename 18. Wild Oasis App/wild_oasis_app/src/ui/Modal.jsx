import PropTypes from "prop-types";
import styled from "styled-components";

import { GrClose } from "react-icons/gr";
import { createPortal } from "react-dom";
import { createContext } from "react";
import { useContext } from "react";
import { cloneElement } from "react";
import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

// Compound Component
const ModalContext = createContext();

// 1. Parent Component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const closeWindow = () => setOpenName("");
  const openWindow = setOpenName;

  return (
    <ModalContext.Provider
      value={{
        openName: openName,
        closeWindow: closeWindow,
        openWindow: openWindow,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

// 2. Children Components
function Window({ name, children }) {
  const context = useContext(ModalContext);
  const { openName, closeWindow } = context;

  // we have extracted this into a CUSTOM HOOK
  const outsideClickRef = useOutsideClick(closeWindow, true);

  // detecting a click outside the modal
  // const ref = useRef();
  // useEffect(() => {
  //   function handleClick(e) {
  //     // console.log("e", e.target);
  //     // console.log("ref", ref.current);
  //     // check if it exists
  //     if (ref.current) {
  //       if (!ref.current.contains(e.target)) {
  //         closeWindow();
  //       }
  //     }
  //   }

  //   document.addEventListener("click", handleClick, true);

  //   return () => {
  //     document.removeEventListener("click", handleClick, true);
  //   };
  // }, []);

  // console.log(name);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={outsideClickRef}>
        {/* Closing modal BUtton */}
        <Button onClick={closeWindow}>
          <GrClose />
        </Button>
        {/*  we clone the element again to pass extra props */}
        <div>{cloneElement(children, { onCloseModal: closeWindow })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

function Open({ children, opensWindowName }) {
  const context = useContext(ModalContext);
  const { openWindow } = context;

  return cloneElement(children, { onClick: () => openWindow(opensWindowName) });
}

// 4. Make Children Components as Properties of the Parent Component
Modal.Opens = Open;
Modal.Window = Window;

export { Modal, Open };

// function Modal({ onCloseClick, children }) {
//   return createPortal(
//     <div>
//       <Overlay>
//         <StyledModal>
//           {/* Closing modal BUtton */}
//           <Button onClick={onCloseClick}>
//             <GrClose />
//           </Button>

//           {children}
//         </StyledModal>
//       </Overlay>
//     </div>,
//     document.body
//   );
// }

Modal.propTypes = {
  children: PropTypes.node,
};

Window.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default Modal;
