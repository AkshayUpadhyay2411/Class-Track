import React from "react";
import "../CSS/Login.css";
const SignupUser = () => {
  return (
    <>
      <div class="container-fluid vh-90 h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              class="img-fluid"
              alt="user"
            />
          </div>

          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <p class="text-center h3  mb-5 mx-1 mx-md-4 mt-4">
              Create new account
            </p>
            <div id="error"></div>
            <form class="mx-1 mx-md-4" method="post" id="signup-form">
              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    name="name"
                    required
                  />
                  <label class="form-label" for="name">
                    Your Name
                  </label>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-list-ol me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="roll-number"
                    class="form-control"
                    name="roll-number"
                    required
                  />
                  <label class="form-label" for="roll-number">
                    Roll number
                  </label>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-graduation-cap fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="branch"
                    class="form-control"
                    name="branch"
                    required
                  />
                  <label class="form-label" for="branch">
                    Your Branch
                  </label>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-users fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="batch"
                    class="form-control"
                    name="batch"
                    required
                  />
                  <label class="form-label" for="batch">
                    Your Batch
                  </label>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="password">
                    Password
                  </label>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="confirmPassword">
                    Repeat your Password
                  </label>
                </div>
              </div>

              <div class="form-check d-flex justify-content-center mb-5">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3c"
                  required
                  name="termsandconditions"
                />
                <label class="form-check-label" for="form2Example3">
                  I agree all statements in{" "}
                  <a href="https://legislative.gov.in/sites/default/files/A2017-23_0.pdf">
                    Terms of service
                  </a>
                </label>
              </div>

              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" class="btn btn-primary btn-lg">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupUser;
