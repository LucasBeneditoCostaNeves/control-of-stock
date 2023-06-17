import { Header } from "../../components/Header";
import { LoginPageStyled } from "./styled";
import onda from "../../assents/onda7.png";
import sigla from "../../assents/sigla1.png";
import animation from "../../assents/animation.gif";
import olho from "../../assents/olho.png";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas";
import { useState } from "react";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const [type, setType] = useState("password");

  const DataForm = (data) => {
    console.log(data);
  };

  return (
    <LoginPageStyled>
      <Header />
      <div className="position">
        <div className="div-logo">
          <img src={sigla} alt="sigla" />
        </div>
        <div className="div-black">
          <img className="sigla" src={sigla} alt="sigla" />
          <h3>Bem-vindo de volta!</h3>
          <h4>melhore agora sua forma de gerenciar seu estoque</h4>
          <img className="gif" src={animation} alt="" />
        </div>
        <div className="div-form">
          <h1>Já Tem cadastro?</h1>
          <h5>Faça login na sua conta abaixo:</h5>
          <form onSubmit={handleSubmit(DataForm)}>
            <Input
              label="Email"
              type="text"
              placeholder="Coloque seu email aqui"
              register={register("email")}
              msgerror={errors.email?.message}
            />
            <Input
              label="Senha"
              type={type}
              placeholder="Coloque seu email aqui"
              register={register("password")}
              msgerror={errors.password?.message}
              img={olho}
              state={type}
              setType={setType}
            />
            <button className="button" type="submit">
              Continuar
            </button>
          </form>
          <span className="alert">Novo por aqui? Cadastre-se</span>
        </div>
      </div>
      <img className="onda" src={onda} alt="onda" />
    </LoginPageStyled>
  );
};
