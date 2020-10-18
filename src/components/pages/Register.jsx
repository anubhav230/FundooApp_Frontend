import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    image: {
        backgroundImage: 'url(./src/image/fundoologo.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(4, 'Must cuntain 4 Characters!').required("firstName required!")
        .matches(/^[A-Za-z]+$/, "Only Alphabets allowed"),
    lastName: Yup.string().min(4, 'Must cuntain 3 Characters!').required("lastName required!")
        .matches(/^[A-Za-z]+$/, "Only Alphabets allowed"),
    email: Yup.string().email().required("Email required!"),
    password: Yup.string()
        .min(4, "Must have minimum 4 Charachters")
        .required("Password required!").matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'confirm password should be same as new password')
        .required()
});

toast.configure()
export default function SignUp() {
    const classes = useStyles(); // 

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const onChangeUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmitNewUser = (e) => {
        e.preventDefault();
        service.register(user)
            .then((user) => {
                console.log(user)
                if (user.status === 200) {
                    toast.success('New user Successfully registered', {position: toast.POSITION.TOP_CENTER});
                };
            })
            .catch((err) => {
                toast.error(`Prease Enter valid Credentials`, {position: toast.POSITION.TOP_CENTER});
            });
    }

    return (

        <Formik initialValues={{firstName: "", lastName: "", email: "", password: ""}}
            validationSchema={validationSchema}
        >
            {({values, errors, touched, handleChange, handleBlur}) => (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Paper className={classes.paper}>
                        <div className={classes.paper}>
                            <img src={Logo} />
                            <Typography component="h1" variant="h5">
                                Create your Fundoo Account
                        </Typography>
                            <form className={classes.form} noValidate onSubmit={onSubmitNewUser}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            value={values.firstName}
                                            onInput={handleChange}
                                            onBlur={handleBlur}
                                            onChange={onChangeUser}
                                            className={errors.firstName && touched.firstName && "error"}
                                        />
                                        {errors.firstName && touched.firstName && (
                                            <div className="input-feedback">{errors.firstName}</div>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            value={values.lastName}
                                            onInput={handleChange}
                                            onBlur={handleBlur}
                                            onChange={onChangeUser}
                                            className={errors.lastName && touched.lastName && "error"}
                                        />
                                        {errors.lastName && touched.lastName && (
                                            <div className="input-feedback">{errors.lastName}</div>
                                        )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={values.email}
                                            onInput={handleChange}
                                            onBlur={handleBlur}
                                            onChange={onChangeUser}
                                            className={errors.email && touched.email && "error"}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
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
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="confirm"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="current-password"
                                            value={values.confirmPassword}
                                            onInput={handleChange}
                                            onBlur={handleBlur}
                                            onChange={onChangeUser}
                                            className={errors.confirmPassword && touched.confirmPassword && "error"}
                                        />
                                        {errors.confirmPassword && touched.confirmPassword && (
                                            <div className="input-feedback">{errors.confirmPassword}</div>
                                        )}
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                // disabled={isSubmitting}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="http://localhost:3000" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </Container>
            )}
        </Formik>
    );
}