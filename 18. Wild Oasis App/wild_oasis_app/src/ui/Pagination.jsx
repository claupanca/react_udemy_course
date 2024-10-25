import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import page_size from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default function Pagination({ totalResults }) {
  const [urlState, setUrlState] = useSearchParams();

  const currentPage = !urlState.get("page") ? 1 : Number(urlState.get("page"));
  // console.log("page", currentPage);

  // console.log("totalReslts", totalResults, totalResults / 10);
  // Compute the total number of pages
  const totalPages = Math.ceil(Number(totalResults) / page_size());
  // console.log("totalPages", totalPages);

  function handleNextPage() {
    if (currentPage === totalPages) return;
    urlState.set("page", currentPage + 1);
    setUrlState(urlState);
  }

  function handlePrevPage() {
    if (currentPage === 1) return;
    urlState.set("page", currentPage - 1);
    setUrlState(urlState);
  }

  return (
    <StyledPagination>
      <P>
        Showing <span>{currentPage * page_size() - page_size() + 1} </span>to{" "}
        <span>
          {currentPage * page_size() > totalResults
            ? totalResults
            : currentPage * page_size()}
        </span>{" "}
        of <span>{totalResults}</span> results
      </P>
      <Buttons>
        <PaginationButton onClick={handlePrevPage}>
          <GrFormPrevious /> Previous
        </PaginationButton>
        <PaginationButton onClick={handleNextPage}>
          Next
          <GrFormNext />
        </PaginationButton>
        {/* <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton> */}
      </Buttons>
    </StyledPagination>
  );
}
