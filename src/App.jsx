import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { authenticated, logout } = useAuth();
  const [theme, setTheme] = useState("dark");
  const navigateTo = useNavigate();

  const changeTheme = (theme) => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setTheme("light");
    } else if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setTheme("dark");
    }
  };

  const handleLogout = () => {
    logout();
    navigateTo("/");
  };

  return (
    <div className="flex flex-col text-gray-900 dark:text-white bg-white dark:bg-gray-800 h-screen">
      <div className="flex p-2 justify-center">
        <div className="m-2">
          {theme === "light" ? (
            <button className="text-2xl" onClick={() => changeTheme("dark")}>
              <FaRegMoon />
            </button>
          ) : (
            <button className="text-2xl" onClick={() => changeTheme("light")}>
              <FaRegSun />
            </button>
          )}
        </div>
        <div className="m-2">
          Encountered a problem?{" "}
          <button onClick={handleLogout} className="font-semibold">
            {" "}
            Go back to Homepage!!
          </button>
        </div>
      </div>
      <Routes>
        {!authenticated ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/dashboard" element={<Dashboard />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
