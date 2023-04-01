import React, { useState } from "react";
import Button from "../Button";
import "../CSS/Login.css";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmitAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("login details : ", username, password);
    setLoading(false);
  };
  const handleSubmitUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("login details : ", username, password);
    setLoading(false);
  };
  return (
    // <>
    //   <div className="login-container">
    //     <div className="input-container">
    //       <input
    //         type="text"
    //         className="input-field-text"
    //         placeholder="Enter username"
    //         value={username}
    //         onChange={(e) => {
    //           setUsername(e.target.value);
    //         }}
    //       />
    //     </div>
    //     <div className="input-container">
    //       <input
    //         type="password"
    //         className="input-field-text"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //     </div>
    //     <div className="extra-container">
    //       <div className="remember-me">
    //         <input type="checkbox" name="remember-me" id="remember-me" />
    //         <label htmlFor="remember-me">Remember me</label>
    //       </div>
    //       <div className="forgot-password">
    //         Forgot password?
    //       </div>
    //     </div>
    //     <div className="btn-container">

    //       {props.admin ? (
    //         <>
    //           <Button
    //             class="b-out btn lg-btn"
    //             handleFunction={handleSubmitAdmin}
    //             text={loading ? "Logging..." : "Login"}
    //           />
    //         </>
    //       ) : (
    //         <>
    //           <Button
    //             class="b-out btn lg-btn"
    //             handleFunction={handleSubmitUser}
    //             text={loading ? "Logging..." : "Login"}
    //           />
    //         </>
    //       )}
    //     </div>
    //     <div className="extra-container">
    //       <div className="signup-redirect">
    //         Don't have an account? Create new account
    //       </div>
    //     </div>

    //   </div>
    // </>
    <>
      <div className="container-fluid  vh-90">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="user"
            ></img>
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2>
              <strong>Welcome to admin Portal</strong>
            </h2>
            <div id="error"></div>

            <div className="form-outline mb-4">
              <input
                type="text"
                name="username"
                id="username"
                className="form-control form-control-lg"
                placeholder="Enter your username"
              />
              <label className="form-label" for="username">
                Username
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
              />
              <label className="form-label" for="password">
                Password
              </label>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{
                  "padding-left": "2.5rem",
                  "padding-right": "2.5rem",
                }}
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <a href="/create_new_admin_account" className="link-danger">
                  Create new account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
