import React from 'react';
import {Form, withFormik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const AddPlantForm = ({errors, touched}) => {


    return(
        <div className='addplantform'>
            <Form>
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

const FormikAddPlantForm = withFormik({
    mapPropsToValues(props) {
        return {
            nickname: props.nickname || "",
            species: props.species || "",
            h2ofrequency: props.h2ofrequency || ""
        };
    },

    validationSchema: Yup.object().shape({
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

    
})(AddPlantForm);
export default FormikAddPlantForm;