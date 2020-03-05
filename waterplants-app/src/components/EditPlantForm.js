import React from 'react';
import {Form, withFormik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const EditPlantForm = ({errors, touched}) => {

    return(
        <div>
            <Form>
                <Field name = 'id' type = 'text' placeholder = 'Enter The Plants ID#' />
                {touched.id && errors.id && (
                    <p>{errors.id}</p>
                )}
                <Field name = 'nickname' type = 'text' placeholder= 'Enter A Nickname' />
                {touched.nickname && errors.nickname && (
                    <p>{errors.nickname}</p>
                )}
                <Field name = 'species' type = 'text' placeholder = 'Enter the Species' />
                {touched.species && errors.species && (
                    <p>{errors.species}</p>
                )}
                <Field name = 'h2ofrequency' type = 'text' placeholder = 'Watering Frequency' />
                {touched.h2ofrequency && errors.h2ofrequency && (
                    <p>{errors.h2ofrequency}</p>
                )}
                <button type = 'Submit'>Submit</button>
            </Form>
        </div>
    )



}

const FormikEditPlantForm = withFormik({
    mapPropsToValues(props) {
        return {
            id: props.id || "",
            nickname: props.nickname || "",
            species: props.species || "",
            h2ofrequency: props.h2ofrequency || ""
        };
    },

    validationSchema: Yup.object().shape({
        id: Yup.string().required("ID is Required"),
        nickname: Yup.string().required("Nickname is required."),
        species: Yup.string().required("Species is required."),
        h2ofrequency: Yup.string().required("Watering frequency is required.")
    }),

    handleSubmit(values, {resetForm}) {
        console.log('submitting', values);
        axios
        .post("", values)
        .then(res => {
            console.log("success", res);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }

    
})(EditPlantForm);
export default FormikEditPlantForm;