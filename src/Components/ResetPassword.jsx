import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../src/image/fundoologo.jpg';
import Paper from '@material-ui/core/Paper';
import {Formik} from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({

    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    span: {
        color: "red",
        fontSize: "1rem",
        display: 'block',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),

    },
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    error: {
        backgroundColor: "red"
    }
}));


const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Must have minimum 8 Charachters")
        .required("Password required!").matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'confirm password should be same as new password')
        .required()
});

export default function ResetPassword() {
    const classes = useStyles();
    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={validationSchema}>
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <div className={classes.paper}>
                                <img src={Logo} />
                                <Typography component="h1" variant="h5">
                                    Change password
                                </Typography>
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="new Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password && "error"}
                                    />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="current-password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.confirmPassword && touched.confirmPassword && "error"}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <div className="input-feedback">{errors.confirmPassword}</div>
                                    )}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <span href="#" variant="body2">
                                                New password and confirm password should be same
                                            </span>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Paper>
                    </main>
                </Container>
            )}
        </Formik>
    )
}