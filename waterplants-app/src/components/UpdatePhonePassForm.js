import React from 'react';
import {Form, withFormik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const UpdatePhonePassForm = ({errors, touched}) => {

    return(
        <div>
            <Form>
                <Field name = 'phone' type = 'text' placeholder = 'Enter Phone Number' />
                {touched.phone && errors.phone && (
                    <p>{errors.phone}</p>
                )}
                <Field name = 'password' type = 'text' placeholder= 'Enter A Password' />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <button type = 'Submit'>Submit</button>
            </Form>
        </div>
    )



}

const FormikUpdatePhonePassForm = withFormik({
    mapPropsToValues(props) {
        return {
            phone: props.phone || "",
            password: props.password || ""
        };
    },

    validationSchema: Yup.object().shape({
        phone: Yup.string().required("Phone Number is Required"),
        password: Yup.string().required("Password is Required.")
    }),

    handleSubmit(values, {resetForm}) {
        console.log('submitting', values);
        axios
        .put(`https://watermyplants2.herokuapp.com/users/:userId`, values)
        .then(res => {
            console.log("success", res);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }

    
})(UpdatePhonePassForm);
export default FormikUpdatePhonePassForm;