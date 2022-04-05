import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  RegisterContainer,
  CardContainer,
  FormSide,
  RegisterHeader,
  RegisterForm,
  RegisterField,
  RegisterInput,
  RegisterBtn,
  ErrorMessage,
  RegisterInfo,
  Logo,
} from "../styles/pages/registerElements";
import { FaBlender, FaLock, FaUserAlt, FaKey } from "react-icons/fa";
import { ImWarning } from "react-icons/im";
import { LightBtn } from "../components/buttons";

const Register = ({ toggleLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [regisForm, setRegisform] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const LoginShakes = async () => {
    await axios
      .post("http://localhost:3001/api/v1/user/", regisForm, {
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
        console.log(regisForm);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      LoginShakes();
    } else {
      setError("Password and ConfirmPassword dont seem to match.");
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    setRegisform({
      userName: username,
      email: email,
      password: password,
    });
  };

  const { username, email, password, confirmPassword } = formData;

  return (
    <RegisterContainer>
      <CardContainer>
        <FormSide>
          <RegisterHeader>
            <h3>Register</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </RegisterHeader>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterField>
              <FaBlender />
              <RegisterInput
                type="text"
                name="username"
                value={username}
                maxLength="20"
                placeholder="Username"
                onChange={handleChange}
              />
            </RegisterField>
            <RegisterField>
              <FaUserAlt />
              <RegisterInput
                type="email"
                name="email"
                value={email}
                maxLength="20"
                placeholder="Email"
                onChange={handleChange}
              />
            </RegisterField>
            <RegisterField>
              <FaLock />
              <RegisterInput
                type="password"
                name="password"
                value={password}
                maxLength="20"
                placeholder="Password"
                onChange={handleChange}
              />
            </RegisterField>
            <RegisterField>
              <FaKey />
              <RegisterInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                maxLength="20"
                placeholder="confirmPassword"
                onChange={handleChange}
              />
            </RegisterField>

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

            <RegisterBtn onClick={handleSubmit}>Register</RegisterBtn>
          </RegisterForm>
        </FormSide>
        <RegisterInfo>
          <Logo />
          <h1>Jacob Shake</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            consequuntur similique quaerat!
          </p>
          <LightBtn Text={"Already have an account?"} Path={"/login"} />
        </RegisterInfo>
      </CardContainer>
    </RegisterContainer>
  );
};

export default Register;
