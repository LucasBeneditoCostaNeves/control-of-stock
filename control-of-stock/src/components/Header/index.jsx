import { HeaderStyled } from "./styled";
import logo from "../../assents/logo.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <button>Cadastrar</button>
    </HeaderStyled>
  );
};
