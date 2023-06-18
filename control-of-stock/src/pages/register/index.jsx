import { Header } from "../../components/Header";
import { RegisterPageStyled } from "./styled";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import onda from "../../assents/onda7.png";
import sigla from "../../assents/sigla1.png";
import animation from "../../assents/animation.gif";
import olho from "../../assents/olho.png";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();
  const [type, setType] = useState("password");

  const DataForm = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <RegisterPageStyled>
      <Header type="cadastro" />
      <div className="position">
        <div className="div-logo">
          <img src={sigla} alt="sigla" />
        </div>
        <div className="div-black">
          <img className="sigla" src={sigla} alt="sigla" />
          <h3>Seja bem-vindo!</h3>
          <h4>melhore agora sua forma de gerenciar seu estoque</h4>
          <img className="gif" src={animation} alt="gif" />
        </div>
        <div className="div-form">
          <h1>Crie uma Conta</h1>
          <h5>Faça sua conta é rápido!</h5>
          <form onSubmit={handleSubmit(DataForm)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite seu nome aqui"
              register={register("nome")}
              msgerror={errors.nome?.message}
            />
            <Input
              label="Email"
              type="text"
              placeholder="Digite seu email aqui"
              register={register("email")}
              msgerror={errors.email?.message}
            />
            <Input
              label="Senha"
              type={type}
              placeholder="Digite sua senha aqui"
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
          <span className="alert" onClick={() => navigate("/")}>
            Já tem uma Conta? Faça login
          </span>
        </div>
      </div>
      <img className="onda" src={onda} alt="onda" />
      <ToastContainer autoClose={3000} theme="dark" />
    </RegisterPageStyled>
  );
};
