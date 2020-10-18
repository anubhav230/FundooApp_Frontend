import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../Assets/fundoologo.jpg';
import Paper from '@material-ui/core/Paper';
import {Formik} from "formik";
import * as Yup from "yup";
import service from '../../services/user'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


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
        .min(4, "Must have minimum 4 Charachters")
        .required("Password required!").matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'confirm password should be same as new password')
        .required()
});

toast.configure()
export default function ResetPassword() {
    const classes = useStyles();

    const [user, setUser] = useState({password: ""});

    const onChangeUser = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onSubmitResetPassword = (e) => {
        e.preventDefault();
        console.log(user)
        user['token'] = window.location.pathname.split('/')[2]
        service.resetpassword(user)
        .then(user => {
            if (user.status === 200) {
                toast.success('Password changed', {position: toast.POSITION.TOP_CENTER});
            }
        }).catch(() => {
            toast.error('error while changing Password', {position: toast.POSITION.TOP_CENTER});
        });
    }

    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={validationSchema}>
            {({values, errors, touched, handleChange, handleBlur}) => (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <div className={classes.paper}>
                                <img src={Logo} />
                                <Typography component="h1" variant="h5">
                                    Change password
                                </Typography>
                                <form className={classes.form} noValidate onSubmit={onSubmitResetPassword}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="newPassword"
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
                                        onInput={handleChange}
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
                                        Reset
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