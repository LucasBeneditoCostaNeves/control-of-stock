import React from "react";
import { InputStyled } from "./styled";
import olhoFechado from "../../assents/olhoFechado.png";

export const Input = ({
  label,
  type,
  placeholder,
  register,
  msgerror,
  img,
  state,
  setType,
}) => {
  const newType = () => {
    console.log("Aui");
    if (state === "password") {
      setType("text");
    } else if (state === "text") {
      setType("password");
    }
  };

  return (
    <InputStyled>
      {img && state === "password" && (
        <img src={img} alt="olho" onClick={() => newType()} />
      )}
      {img && state === "text" && (
        <img src={olhoFechado} alt="olho" onClick={() => newType()} />
      )}
      {/* {img && <img src={img} alt="olho" onClick={() => newType()} />} */}
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
      <span className="info">{msgerror}</span>
    </InputStyled>
  );
};
