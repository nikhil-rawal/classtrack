import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../context/authUtils";
import InputForm from "../components/InputForm";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const { login, authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      navigateTo("/dashboard");
    }
  }, [authenticated, navigateTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      login();
      alert("Login successful");
      navigateTo("/dashboard");
    } else {
      alert("Please enter valid cedentials !");
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 items-center justify-center m-4 p-4 rounded-lg"
      >
        {/* Username */}
        <div className="m-2 p-2">
          <label htmlFor="userName" className="m-1" />
          Username
          <InputForm
            inputClass="m-1 border dark:border-white border-gray-900"
            inputName="userName"
            inputType="text"
            inputPlaceholder="Username"
            inputValue={userName}
            inputOnChange={(e) => setUserName(e.target.value)}
            inputRequired="required"
            inputAutoComplete="off"
          />
        </div>
        {/* Password */}
        <div className=" m-2 p-2">
          <label htmlFor="password" className="m-1" />
          Password
          <InputForm
            inputClass="m-1 border dark:border-white border-gray-900"
            inputName="password"
            inputType="password"
            inputPlaceholder="Password"
            inputValue={password}
            inputOnChange={(e) => setPassword(e.target.value)}
            inputRequired="required"
            inputAutoComplete="off"
          />{" "}
        </div>
        <button
          type="submit"
          className="p-2 rounded-lg border dark:border-white border-gray-900"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
