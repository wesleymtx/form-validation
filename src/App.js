
import React from "react"

import Form from './components/form'

import "./App.css"

const handleSubmit = values => alert(JSON.stringify(values))
const initialValues = {}

const App = () => (
    <div className="App">
        <Form handleSubmit={handleSubmit} initialValues={initialValues}/>
    </div>
)

export default App



// import './App.css'
// import {userSchema} from './validations/userValidations'

// function App() {
//   const handleSubmit = async (event)=>{
//     event.preventDefault()
//     let input = document.getElementsByTagName('input')
//     let formData = {
//       name: input[0].value,
//       address: input[1].value,
//       email: input[2].value,
//       date: input[3].value
//     }
//     const isValid = await userSchema.isValid(formData)
//     console.log(isValid)
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Nome"></input>
//         <input type="text" placeholder="Endereço"></input>
//         <input type="text" placeholder="E-mail"></input>
//         <input type="text" placeholder="Data de nascimento"></input>
//         <input type="submit"></input>
//       </form>
//     </div>
//   );
// }

// export default App;

// 21.	Monte um programa que use ReactJS que tenha as seguintes funcionalidades:

// Tela que captura 5 campos: nome, endereço, telefone, e-mail e data de nascimento;
// Faca validação básica usando Yup
// •	Nome não pode ter números;
// •	Telefone – somente números;
// •	Validar formato de e-mail;
// •	Usa uma data valida: por exemplo não pode existir 30/02/2020
// Use Material-UI ou Bootstrap;
// Botão Enviar – não precisa implementar a funcionalidade
// Enviar o código, que possa ser compilado remotamente;
