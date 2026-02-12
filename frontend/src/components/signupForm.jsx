import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    if (!name || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (storedAccounts.some((account) => account.name === name)) {
      alert("This account already exists.");
      return;
    }

    const newAccount = { name, password };
    storedAccounts.push(newAccount);

    localStorage.setItem("accounts", JSON.stringify(storedAccounts));
    alert("Signup successful!");

    navigate("/login");

    setName("");
    setPassword("");
  }

  return (
    <div className="flex flex-col text-center items-center justify-center min-h-screen bg-blue-50">
      <div className="items-center">
        <div className="text-blue-950 mb-10">
          <h1 className="text-lg font-bold">The Star Wars Quote Quizz</h1>
          <p className="text-sm text-gray-500">
            Please fill in a temporary username and a password
          </p>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <div className="h-3"></div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="buttons mt-5">
          <button
            onClick={handleSignup}
            className="bg-blue-500 text-white px-4 p-2 m-3 rounded hover:bg-blue-600"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-4 p-2 m-3 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
