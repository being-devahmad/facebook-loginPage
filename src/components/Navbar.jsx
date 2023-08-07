import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "85vh" }}
        >
          <div className="col-lg-6">
            <div style={{ width: "100%" }}>
              <h1
                className="display-md-4 display-1 fw-bold text-center text-lg-start"
                style={{ color: "#1877f2" }}
              >
                facebook
              </h1>
              <p className="fs-4 text-center text-lg-start w-100">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>
          </div>
          <div className="col-lg-4 px-lg-1 px-5">
            <div
              className="p-4 bg-white rounded-3"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              }}
            >
              <form class="row g-3">
                <div class="col-12">
                  <input
                    type="email"
                    class="form-control p-3"
                    id="inputEmail4"
                    placeholder="Enter address or phone number"
                  />
                </div>
                <div class="col-12">
                  <input
                    type="password"
                    class="form-control p-3"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div class="d-grid gap-2">
                  <button
                    class="btn btn-primary fs-5 fw-bold py-2"
                    type="button"
                  >
                    Login
                  </button>
                </div>
                <div class="col-12 d-flex justify-content-center">
                  <a href="/" className="text-decoration-none">
                    Forgotten Password?
                  </a>
                </div>
                <div class="col-12">
                  <div style={{ borderTop: "2px solid #dfe1e5" }}></div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-lg fw-bold text-white fs-5"
                    style={{ backgroundColor: "#3daf26" }}
                  >
                    Create a new account
                  </button>
                </div>
              </form>
            </div>
            <div>
              <p className="text-center pt-3">
                <a href="/" className="fw-bold text-decoration-none text-black">
                  Create a page
                </a>
                for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
