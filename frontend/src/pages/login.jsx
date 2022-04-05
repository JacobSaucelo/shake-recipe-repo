import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  CardContainer,
  FormSide,
  LoginHeader,
  LoginForm,
  LoginField,
  LoginInput,
  LoginBtn,
  LoginRegister,
  RegisterLink,
  ErrorMessage,
  LoginInfo,
  Logo,
} from "../styles/pages/loginElements";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { ImWarning } from "react-icons/im";

const Login = ({ toggleLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const LoginShakes = async () => {
    await axios
      .post("http://localhost:3001/api/v1/user/login", formData, {
        withCredentials: true,
      })
      .then((res) => {
        setError("");
        toggleLoggedIn();
        if (res.status >= 199 && res.status <= 299) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginShakes();
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { email, password } = formData;

  return (
    <LoginContainer>
      <CardContainer>
        <FormSide>
          <LoginHeader>
            <h3>Login</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </LoginHeader>
          <LoginForm>
            <LoginField>
              <FaUserAlt />
              <LoginInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
            </LoginField>
            <LoginField>
              <FaLock />
              <LoginInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
            </LoginField>

            {error ? (
              <ErrorMessage>
                <h5>
                  <ImWarning />
                </h5>
                {error}.
              </ErrorMessage>
            ) : (
              ""
            )}

            <LoginBtn onClick={handleSubmit}>Login</LoginBtn>
          </LoginForm>
          <LoginRegister>
            <h5>Dont have an account?</h5>
            <RegisterLink to="/register">Register now!</RegisterLink>
          </LoginRegister>
        </FormSide>
        <LoginInfo>
          <Logo />
          <h1>Jacob Shake</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            consequuntur similique quaerat!
          </p>
        </LoginInfo>
      </CardContainer>
    </LoginContainer>
  );
};

export default Login;
