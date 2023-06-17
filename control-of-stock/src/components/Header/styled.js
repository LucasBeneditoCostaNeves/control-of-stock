import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--yellow);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 10px 8px;

  button {
    height: 35px;

    border: none;
    border-radius: 4px;

    color: var(--gray-10);
    background-color: var(--black);

    font-weight: 700;
  }
`;
