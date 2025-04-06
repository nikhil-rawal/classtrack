import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authenticated } = useAuth();
  const [theme, setTheme] = useState("dark");

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

  return (
    <div className="flex flex-col text-gray-900 dark:text-white bg-white dark:bg-gray-800 h-screen">
      <div className="flex p-4 justify-center">
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
