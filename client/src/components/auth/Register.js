import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FaPiedPiperHat } from "react-icons/fa";
import { Card } from "reactstrap";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alerts";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log(formData);
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="registerPage">
      <div className="autheader d-fex">
        <Link className="logoName registerBtns" to="/">
          <FaPiedPiperHat className="JaycoinIcon" size="1.5em" />
          Jaycoin
        </Link>
        <div className="d-flex flex-row align-items-center">
          <p className="mt-3">Already have a wallet?</p>
          <Link to="/login" className="registerBtns registerToLoginbtn ml-3 ">
            Login
          </Link>
        </div>
      </div>
      <div className="registerform">
        <Card className="authCard">
          <Alert />
          <h3 className="pb-3">Create a Wallet</h3>
          <form onSubmit={e => onSubmit(e)}>
            <div className="d-flex flex-column mb-3">
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={name}
                name="name"
                onChange={e => onChange(e)}
                required
              />
            </div>
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
            <div className="d-flex flex-column mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                value={password2}
                placeholder="Password"
                name="password2"
                onChange={e => onChange(e)}
                required
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Create My Wallet"
              block
            />
          </form>
        </Card>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
