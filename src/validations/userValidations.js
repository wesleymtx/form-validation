import * as Yup from 'yup';
const phoneRegExp = /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/

const today = new Date();

export const UserSchema = Yup.object({
    name: Yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Nome inválido')
    .required("Campo obrigatório"),
    address: Yup.string().required("Campo obrigatório"),
    phone: Yup
    .string()
    .matches(phoneRegExp, 'Número inválido')
    .required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    date: Yup.date().max(today, "A data do campo deve ser anterior a data de hoje").required("Campo obrigatório")
});

// Tela que captura 5 campos: nome, endereço, telefone, e-mail e data de nascimento;
// Faca validação básica usando Yup
// •	Nome não pode ter números;
// •	Telefone – somente números;
// •	Validar formato de e-mail;
// •	Usa uma data valida: por exemplo não pode existir 30/02/2020
// Use Material-UI ou Bootstrap;
// Botão Enviar – não precisa implementar a funcionalidade
// Enviar o código, que possa ser compilado remotamente;
