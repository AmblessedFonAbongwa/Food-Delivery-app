import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const LoginPop = ({ setShowLogin }) => {
  const {setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const url='http://localhost:4000'
  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  }

  return (
    <div className="loginPopUp">
      <form className="form-container" onSubmit={onLogin}>
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              required
              name="name"
              onChange={onchangeHandler}
              value={data.name}
            />
          )}
          <input
            name="email"
            onChange={onchangeHandler}
            value={data.email}
            type="email"
            placeholder="your Email"
            required
          />
          <input
            name="password"
            onChange={onchangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" onClick={onLogin}>
          {currentState === "sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create A New Account?{" "}
            <span onClick={() => setCurrentState("sign up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
