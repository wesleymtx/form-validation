import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().required(),
    date: yup.date().required()
});
// name: yup.string().required(),
// email: yup.string().email().required(),
// password: yup.string().min(4).max(10).required()