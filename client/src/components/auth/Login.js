import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import { Card } from "reactstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="registerPage">
        <div className="autheader d-fex">
          <Link className="logoName registerBtns" to="/">
            <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
            Jaycoin
          </Link>
          <div className="d-flex flex-row align-items-center">
            <p className="mt-3">Don't have a wallet?</p>
            <Link
              to="/register"
              className="registerBtns registerToLoginbtn ml-3 "
            >
              Create One Now
            </Link>
          </div>
        </div>
        <div className="registerform">
          <Card className="authCard">
            <h3 className="pb-3">Login</h3>
            <form onSubmit={e => onSubmit(e)}>
              <div className="d-flex flex-column mb-3">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="E-mail"
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary"
                value="Log In"
                block
              />
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
