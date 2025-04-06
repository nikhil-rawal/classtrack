import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState("dark");
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "Admin@123") {
      setAuthenticated(true);
      alert("Login successful");
    } else {
      alert("Please enter valid cedentials !");
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center margin-autos h-screen text-gray-900 dark:text-white bg-white dark:bg-gray-800
"
    >
      <div className="flex p-4">
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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 items-center justify-center m-4 p-4 rounded-lg"
      >
        <div className="m-2 p-2">
          <label htmlFor="userName" className="m-1">
            Username
          </label>
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
          <label htmlFor="password" className="m-1">
            Password
          </label>
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

      {authenticated && (
        <div>
          <h1>Welcome</h1>
          <button onClick={() => setAuthenticated(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
