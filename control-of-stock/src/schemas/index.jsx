import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido")
    .min(6, "Mínimo 6 caracteres")
    .max(60, "Máximo 60 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo 6 caracteres")
    .max(60, "Máximo 60 caracteres"),
});

export const registerSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Minimo 3 caracteres")
    .max(120, "Máximo 120 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido")
    .min(6, "Mínimo 6 caracteres")
    .max(60, "Máximo 60 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Minimo 6 caracteres")
    .max(60, "Máximo 60 caracteres"),
});
