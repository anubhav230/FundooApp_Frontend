import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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
    },
    // span2:{
    //     marginTop: theme.spacing(6),
    // }
}));


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email required!")
});

export default function ForgetPassword() {
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
                                    Find your email
                                </Typography>
                                <span className={classes.span2}>
                                    Enter your recovery email
                                </span>
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Enter your email asddress"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.email && touched.email && "error"}
                                    />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    // disabled={isSubmitting}
                                    >
                                        Send
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <span>
                                                Reset password link will be sent on your mail
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