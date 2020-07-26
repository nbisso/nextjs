import React, { useEffect, useState } from "react";
import Router from "next/router";
import firebase from "firebase"
import Avatar from "@material-ui/core/Avatar";
import Google from "@material-ui/icons/Android";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Icon from '@material-ui/core/Icon';

import { makeStyles } from "@material-ui/core/styles";
import { getLayout } from "../components/layouts/CleanLayout";
import Copyright from "../components/Copyright";
import { route } from "next/dist/next-server/server/router";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true)


  const login = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  useEffect(() => {
    firebase.auth().getRedirectResult().then(async (result) => {
      console.log("asd")
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.

        let tokenid = await result.user.getIdToken()
        Router.push("/api/auth?tokenId=" + tokenid)

        // await fetch("/api/auth?tokenId=" + tokenid, { redirect: 'follow', method: "POST" });
        return;
      }

      setLoading(false)
      // The signed-in user info.
      var user = result.user;
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }, [])



  const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  }
  if (loading) {
    return (<h1>Loading...</h1>)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => login(e)}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
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
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<Google />}
        >
          Ingresar con google
      </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

Login.getLayout = getLayout;

export default Login;
