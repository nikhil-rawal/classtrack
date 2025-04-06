import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigateTo = useNavigate();
  const { authenticated, logout } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      navigateTo("/");
    }
  }, [authenticated, navigateTo]);

  const handleLogout = () => {
    logout();
    navigateTo("/");
    alert("Logout successful!");
  };
  return (
    <div>
      <h1>Welcome to Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
