import { HeaderStyled } from "./styled";
import logo from "../../assents/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = ({ type }) => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      {type === "login" && (
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      )}
      {type === "cadastro" && (
        <button onClick={() => navigate("/")}>Login</button>
      )}
      {type === "dashboard" && (
        <button onClick={() => navigate("/")}>Logout</button>
      )}
    </HeaderStyled>
  );
};
