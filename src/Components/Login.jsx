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

const useStyles = makeStyles((theme) => ({

    form: {
        width: '100%', // Fix IE 11 issue.
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
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

}));

const validation = Yup.object().shape({

    email: Yup.string().email().required("Email required!"),
    password: Yup.string()
        .min(4, "Must have minimum Charachters")
        .required("Required !").matches(/(?=.*[0-9])/, "Password must contain a number."),
});



export default function SignIn() {

    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState({email : "",password : "" });


    const classes = useStyles();
    return (
        <Formik initialValues={{email:"", password:""}} validationSchema={validation}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <div className={classes.paper}>
                        <img src={Logo} />
                        <Typography component="h1" variant="h5">
                            Sign in
                    </Typography>
                        <form className={classes.form} noValidate>
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
                            />
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
                            />
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
                                    <Link href="#" variant="body2">
                                        Forgot password?
                        </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Paper>
            </main>
        </Container>
        </Formik>
    );
}