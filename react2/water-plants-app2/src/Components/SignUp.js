import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";

let SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("This field is required."),
  username: yup
    .string()
    .min(4, "Username is too short.")
    .max(12, "Username is too long")
    .required("This field is required"),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required.")
});

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 10,
    color: theme.palette.secondary.main
  },
  input: {
    backgroundColor: theme.palette.info.main
  }
}));

const SignUp = () => {
  const classes = useStyles();
  const [toNext, setToNext] = useState(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography>Plese enter your information below to sign up.</Typography>
        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log("Values", values);
            axios
              .post(
                "https://watermyplants2.herokuapp.com/auth/register",
                values
              )
              .then(response => {
                console.log("POST response", response);
                setToNext(true);
              })
              .catch(err => console.log("Submit failure", err));
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              {toNext ? <Redirect to="/login" /> : null}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={errors.email && touched.email}
                    className={classes.input}
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    label="Email *"
                    autoFocus
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.username && touched.username}
                    className={classes.input}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="username"
                    label="Username *"
                    name="username"
                    autoComplete="lname"
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.password && touched.password}
                    className={classes.input}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="password"
                    type="password"
                    label="Password *"
                    name="password"
                    autoComplete="password"
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>
                
               
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignUp;
