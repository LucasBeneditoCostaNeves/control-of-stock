import { styled } from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    width: 200px;
    height: 34px;

    display: flex;
    margin: 32px auto 0px;

    border-radius: 4px;
    border: var(--gray-3) solid 1px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  }

  label {
    position: absolute;
    top: 24px;
    left: 20px;

    background-color: white;
  }

  .info {
    font-size: 15px;
    margin-top: 3px;
    color: var(--red);
    position: absolute;
    bottom: -19px;
    left: 39px;
  }

  img {
    width: 20px;
    position: absolute;
    bottom: 9px;
    right: 12px;
  }
`;
