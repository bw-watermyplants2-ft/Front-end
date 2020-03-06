import React from 'react';
import {Form, withFormik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const RegisterForm = ({errors, touched}) => {


    return(
        <div className='registerform'>
            <Form>
                <Field name = 'username' type = 'text' placeholder= 'Enter Username' />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}
                <Field name = 'phonenumber' type = 'text' placeholder = 'Enter Phone Number' />
                {touched.phonenumber && errors.phonenumber && (
                    <p>{errors.phonenumber}</p>
                )}
                <Field name = 'password' type = 'text' placeholder = 'Enter Password' />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <button type = 'Submit'>Submit</button>
            </Form>
        </div>
    )



}

const FormikRegisterForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            phonenumber: props.phonenumber || "",
            password: props.password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username is required."),
        phonenumber: Yup.string().required("Phone number is required."),
        password: Yup.string().required("Password is required.")
    }),

    handleSubmit(values, {resetForm}) {
        console.log('submitting', values);
        axios
        .post("https://watermyplants2.herokuapp.com/auth/register", values)
        .then(res => {
            console.log("success", res);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }

    
})(RegisterForm);
export default FormikRegisterForm;