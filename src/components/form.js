
import * as yup from 'yup'
import PropTypes from 'prop-types'
import React from 'react'
import {userSchema} from '../validations/userValidations'
import { ErrorMessage, Formik, Form, Field } from 'formik'

import './form.css'

const FormValidated = ({ handleSubmit, initialValues, errors }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
        <Form className="Form">
            <label>Nome:</label>
            <div className="Form-Group">
                <Field className="Form-Field" name="name" placeholder="Nome" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="name"/>
            </div>
            <label>Endereço:</label>
            <div className="Form-Group">
                <Field className="Form-Field" name="address" placeholder="Endereço" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="address"/>
            </div>
            <label>Telefone:</label>
            <div className="Form-Group">
                <Field className="Form-Field" name="phone" placeholder="phone" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="phone"/>
            </div>
            <label>Email:</label>
            <div className="Form-Group">
                <Field className="Form-Field" name="email" placeholder="email" type="email"/>
                <ErrorMessage className="Form-Error" component="span" name="email"/>
            </div>

            <label>Data de nascimento:</label>
            <div className="Form-Group">
                <Field className="Form-Field" name="date" placeholder="date" type="date"/>
                <ErrorMessage className="Form-Error" component="span" name="date"/>
            </div>
            <input type="submit" className="Form-Btn" />
            
        </Form>
    </Formik>
)

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default FormValidated;

// Tela que captura 5 campos: nome, endereço, telefone, e-mail e data de nascimento;
// Faca validação básica usando Yup
// •	Nome não pode ter números;
// •	Telefone – somente números;
// •	Validar formato de e-mail;
// •	Usa uma data valida: por exemplo não pode existir 30/02/2020
// Use Material-UI ou Bootstrap;
// Botão Enviar – não precisa implementar a funcionalidade
// Enviar o código, que possa ser compilado remotamente;











// import * as yup from 'yup'
// import PropTypes from 'prop-types'
// import React, {useState} from 'react'
// import {userSchema} from '../validations/userValidations'

// import './form.css'


// const Form = () => {

//     const [name, updateName]=useState('')

//     const handleSubmit = async (event)=>{
//         event.preventDefault()
//       }
    
//       const handleNameChange = event => updateName(event.target.value)
//       const handleBlurName = () => console.log(name)
//       return (
//         <div className="App">
//           <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Nome" onChange={handleNameChange} onBlur={handleBlurName} value={name}></input>
//             <span>{}</span>
//             <input type="text" placeholder="Endereço"></input>
//             <input type="text" placeholder="E-mail"></input>
//             <input type="text" placeholder="Data de nascimento"></input>
//             <input type="submit"></input>
//           </form>
//         </div>
//       );
// }

// Form.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     initialValues: PropTypes.object.isRequired
// }


// export default Form



// let input = document.getElementsByTagName('input')
//         let formData = {
//           name: input[0].value,
//           address: input[1].value,
//           email: input[2].value,
//           date: input[3].value
//         }
//         const isValid = await userSchema.isValid(formData)
//         console.log(isValid)