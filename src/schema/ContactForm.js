import *as Yup from 'yup'

export const ContactForm=Yup.object().shape({
    name:Yup.string().min(2,'Too Short').max(50,'Too Long').required('Required'),
    email:Yup.string().email('Invalid email').required('Required'),
    message:Yup.string().min(5,'too short').max(100,'Too Long').required('Required')
})