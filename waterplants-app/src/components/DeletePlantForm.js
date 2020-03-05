import React from 'react';
import {Form, withFormik, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


const DeletePlantForm = ({errors, touched}) => {


    return(
        <div>
            <Form>
                <Field name = 'idnumber' type = 'text' placeholder= 'Enter ID#' />
                {touched.idnumber && errors.idnumber && (
                    <p>{errors.idnumber}</p>
                )}
                <button type = 'Submit'>Delete</button>
            </Form>
        </div>
    )



}


const FormikDeletePlantForm = withFormik({
    mapPropsToValues(props) {
        return {
            idnumber: props.idnumber || "",
        };
    },

    validationSchema: Yup.object().shape({
        idnumber: Yup.string().required("ID is required.")
    }),

    handleSubmit(value, {resetForm}) {
        console.log('submitting', value);
        axios
        .delete("")
        .then(res => {
            console.log("success", res);
            resetForm();
        })
        .catch(err => console.log(err.response));
    }
    

    
})(DeletePlantForm);
export default FormikDeletePlantForm;