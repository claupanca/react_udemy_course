import PropTypes from "prop-types";
import { useContext } from "react";
import { createContext } from "react";

import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

// const Empty = styled.p`
//   font-size: 1.6rem;
//   font-weight: 500;
//   text-align: center;
//   margin: 2.4rem;
// `;

// 2. Parent Context
const TableContext = createContext("");

// 1. Parent Element
export default function Table({ children, columnsa }) {
  const columns = columnsa;

  return (
    <TableContext.Provider
      value={{
        columns: columns,
      }}
    >
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

// 3. Child Components
function Header({ children }) {
  const { columns } = useContext(TableContext);
  console.log("columns", columns);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ children }) {
  return <StyledBody>{children}</StyledBody>;
}

function TableFooter() {
  return <Footer>Footer</Footer>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = TableFooter;

const childrenProp = { children: PropTypes.node };

Table.propTypes = { ...childrenProp, columnsa: PropTypes.string };

Header.propTypes = childrenProp;

Row.propTypes = childrenProp;

Body.propTypes = childrenProp;

export { Header, Row, Body, Footer };