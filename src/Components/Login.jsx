import React, {useState} from 'react';
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
import service from '../services/user'

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
    email: Yup.string().email().required("Email required!"),
    password: Yup.string()
        .min(4, "Must have minimum 4 Charachters")
        .required("Password required!").matches(/(?=.*[A-Z])/, "Password must contain a number."),
});

export default function SignIn() {
    const classes = useStyles();

    const [user, setUser] = useState({email: "", password: ""});

    const onChangeUser = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        service.signin(user).then(user => {
            if (user.status === 200) {
                alert('Login Successfully');
            }
        }).catch(() => {
            alert('Invalid Credentials');
        });
    }

    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={validationSchema}>
            {({values, errors, touched, handleBlur, handleChange}) => (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <div className={classes.paper}>
                                <img src={Logo} />
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <form className={classes.form} noValidate onSubmit={onSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={values.email}
                                        onInput={handleChange}
                                        onBlur={handleBlur}
                                        onChange={onChangeUser}
                                        className={errors.email && touched.email && "error"}

                                    />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={values.password}
                                        onInput={handleChange}
                                        onBlur={handleBlur}
                                        onChange={onChangeUser}
                                        className={errors.password && touched.password && "error"}
                                    />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    // disabled={isSubmitting}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="http://localhost:3000/forgetpassword" variant="body2">
                                                Forgot password?
                                    </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="http://localhost:3000/register" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
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