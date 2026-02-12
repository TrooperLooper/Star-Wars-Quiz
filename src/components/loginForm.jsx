import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const matchedAccount = storedAccounts.find(
      (account) => account.name === name && account.password === password
    );

    if (!name || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (!matchedAccount) {
      alert("Name or password is incorrect. Please try again.");
      setName("");
      setPassword("");
      return;
    }
    navigate("/game");
  }

  return (
    <div className="flex flex-col text-center items-center justify-center min-h-screen bg-blue-50">
      <div className="text-blue-950 mb-10">
        <h1 className="text-lg font-bold">The Star Wars Quote Quizz</h1>
      </div>
      <div className="p-4 border rounded">
        <h2 className="text-xl mb-2">Login</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User Name"
        />
        <div className="h-3"></div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="h-3"></div>
        <div className="buttons mt-5">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 p-2 rounded m-3 hover:bg-blue-600"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-4 p-2 rounded m-3 hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
