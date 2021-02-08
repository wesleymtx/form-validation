import * as Yup from 'yup';

export const UserSchema = Yup.object({
    name: Yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Nome inválido')
    .required("")
    ,
    address: Yup.string().required("Campo obrigatório"),
    phone: Yup.number().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    date: Yup.date().required("Campo obrigatório")
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
