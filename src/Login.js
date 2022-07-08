import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {

        navigate("/");
      })
      .catch(error => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By sign-in you aggree to AMAZON FAKE CLONE Condition of Use & Sale.
          Please see our privacy notice., our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
