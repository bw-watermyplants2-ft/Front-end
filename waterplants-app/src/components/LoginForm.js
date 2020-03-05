import React from 'react';
import {Form, withFormik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const LoginForm = ({errors, touched}) => {


    return(
        <div className='Loginform'>
            <Form>
                <Field name = 'username' type = 'text' placeholder= 'Username or Phone' />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
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

const FormikLoginForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username or phone number is required."),
        password: Yup.string().required("Password is required.")
    }),

    handleSubmit(values, {resetForm}) {
        console.log('submitting', values);
        axios
        .post("https://watermyplants2.herokuapp.com/auth/login", values)
        .then(res => {
            console.log("success", res);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }

    
})(LoginForm);
export default FormikLoginForm;