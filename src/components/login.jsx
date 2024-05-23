import React, { useState } from "react";
import "./login.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [noValidEmail, showNoValidEmail] = useState(false);

  const { t, i18n } = useTranslation();

  const validateEmail = (e) => {
    if (e.target?.value && e.target.value.match(isValidEmail)) {
      showNoValidEmail(false);
      setEmail(e.target.value);
    } else if (e.target?.value) {
      showNoValidEmail(true);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const login = () => {
    if (!noValidEmail && email && password) {
      console.log("Valid form");
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="header">
          <img className="logo" src="./images/bird-logo.jpg" />
          {t("login")}
        </div>
        <div className="wrapper">
          <div className="icon">
            <img className="user-icon" src="./images/user.png" alt="user" />
          </div>
          <input
            type="email"
            className="input"
            placeholder={t("email")}
            name="email"
            onChange={onChangeEmail}
            onBlur={validateEmail}
          />
        </div>
        <div class="wrapper">
          <div className="icon">
            <img className="user-icon" src="./images/password.png" alt="lock" />
          </div>
          <input
            type="password"
            className="input"
            placeholder={t("password")}
            onChange={onChangePassword}
            name="password"
          />
        </div>
        {noValidEmail && (
          <span className="error-message">Not a valid email</span>
        )}
        <button className="btn" onClick={login}>
          {t("login-btn")}
        </button>
        <a href="" className="forgot-password">
          {t("forgot-password")}
        </a>

        {/* Language Change */}
        <div className="language-box">
          Language :{" "}
          <button
            className={"en" === i18n.language ? "lngBtn active" : "lngBtn"}
            onClick={() => changeLanguage("en")}
          >
            {t("english")}
          </button>{" "}
          |{" "}
          <button
            className={"hi" === i18n.language ? "lngBtn active" : "lngBtn"}
            onClick={() => changeLanguage("hi")}
          >
            {t("hindi")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
