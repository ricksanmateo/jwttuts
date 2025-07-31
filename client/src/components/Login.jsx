import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Login = ({ isAuth }) => {
  return (
    <Fragment>
      <h1>Login</h1>
      <button onClick={() => isAuth(true)}>Login</button>
    </Fragment>
  );
};

export default Login;
