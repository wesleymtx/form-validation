
import * as yup from 'yup'
import PropTypes from 'prop-types'
import React from 'react'
import {UserSchema} from '../validations/userValidations'
import { ErrorMessage, Formik, Form, Field } from 'formik'

import './form.css'

const FormValidated = ({ handleSubmit, initialValues, errors }) => (

    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={UserSchema}>
        <Form className="bg-light p-3">
            <h1 class="h3 mb-3 fw-normal text-center">Cadastre-se</h1>
            <label class="form-label mt-2">*Nome:</label>
            <div className="Form-Group">
                <Field className="form-control" name="name" placeholder="Nome" type="text"/>
                <ErrorMessage className="mb-3 text-danger" component="span" name="name"/>
            </div>
            <label class="form-label mt-2">Endereço:</label>
            <div className="Form-Group">
                <Field className="form-control" name="address" placeholder="Endereço" type="text"/>
                <ErrorMessage className="mb-3 text-danger" component="span" name="address"/>
            </div>
            <label class="form-label mt-2">Telefone:</label>
            <div className="Form-Group">
                <Field className="form-control" name="phone" placeholder="phone" type="text"/>
                <ErrorMessage className="mb-3 text-danger" component="span" name="phone"/>
            </div>
            <label class="form-label mt-2">Email:</label>
            <div className="Form-Group">
                <Field className="form-control" name="email" placeholder="email" type="email"/>
                <ErrorMessage className="mb-3 text-danger" component="span" name="email"/>
            </div>

            <label class="form-label mt-2">Data de nascimento:</label>
            <div className="Form-Group">
                <Field className="form-control" name="date" placeholder="date" type="date"/>
                <ErrorMessage className="mb-3 text-danger" component="span" name="date"/>
            </div>
            <input type="submit" className="w-100 btn btn-lg btn-primary mt-4" />
            
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