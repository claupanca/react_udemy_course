// import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

// to make this dynamic, we pass the field and the Filter Options
function Filter({ fieldName, options }) {
  const [urlState, setUrlState] = useSearchParams();
  const filter = urlState.get(fieldName) || options[0].value;

  function handleClick(option) {
    // console.log("click", discount);
    // setUrlState({ filter: discount });
    urlState.set(fieldName, option);
    setUrlState(urlState);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          $active={filter === option.value}
          key={option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

// // 3. Children Components
// function Button({ children, type }) {
//   function handleClick() {
//     console.log("type", type);
//   }

//   return (
//     <FilterButton onClick={handleClick}>
//       <NavLink to={`?filter=true`}>{children}</NavLink>
//     </FilterButton>
//   );
// }

export default Filter;
