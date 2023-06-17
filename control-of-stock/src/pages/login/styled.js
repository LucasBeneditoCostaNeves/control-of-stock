import { styled } from "styled-components";

export const LoginPageStyled = styled.div`
  .onda {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 330px;

    z-index: 1;
  }

  .position {
    position: absolute;
    top: 328px;
    left: 50%;

    display: flex;
    flex-direction: column;

    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .div-black {
    display: none;
    flex-direction: column;
    align-items: center;

    width: 250px;
    height: 380px;

    background-color: var(--black);

    border-radius: 12px 0px 0px 12px;

    h3 {
      color: white;

      font-size: 22px;
      font-weight: 600;
      margin-top: 15px;
    }

    h4 {
      color: white;
      text-align: center;
      font-size: 15px;

      margin-top: 20px;
    }
  }

  .gif {
    margin-top: 30px;
  }

  .div-form {
    width: max-content;
    height: 380px;
    padding: 0px 30px;

    background-color: white;

    border-radius: 0px 0px 8px 8px;

    text-align: center;

    h1 {
      margin-top: 30px;

      font-size: 25px;
      font-weight: 800;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h5 {
      margin: 8px 0px 10px;
      font-size: 13px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 2px 2px rgba(0, 0, 0, 0.25);
    }
  }

  .div-logo {
    display: flex;

    width: 272px;

    background-color: black;

    border-radius: 8px 8px 0px 0px;
    justify-content: center;

    img {
      width: 80px;
      height: 55px;

      padding: 6px 0px;
    }
  }

  .sigla {
    width: 127px;
    height: 84px;
    margin-top: 70px;
  }

  .button {
    width: 204px;
    height: 49px;
    left: 334px;
    top: 365px;

    color: white;
    background: #d2aa42;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 8px;
    border: none;

    font-size: 18px;
    margin: 32px 0px 10px;
  }

  .alert {
    font-size: 13px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 690px) {
    .div-black {
      display: flex;
    }

    .div-logo {
      display: none;
    }

    .position {
      flex-direction: row;
      top: 50%;
    }

    .div-form {
      border-radius: 0px 8px 8px 0px;
      padding: 0px 80px;
    }
  }
`;
