import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../context/authUtils";

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
        <div className="m-2 p-2">
          <label htmlFor="userName" className="m-1" />
          Username
          {/* </label> */}
          <input
            className="m-1 border dark:border-white border-gray-900"
            name="userName"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className=" m-2 p-2">
          <label htmlFor="password" className="m-1" />
          Password
          {/* </label> */}
          <input
            className="m-1 border dark:border-white border-gray-900"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
