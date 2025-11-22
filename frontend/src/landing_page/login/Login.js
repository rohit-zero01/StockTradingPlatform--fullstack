import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://stocktradingplatform-fullstack.onrender.com/login", {
        username,
        password,
      })
      .then((res) => {
        console.log("Received token from backend:", res.data.token);
        localStorage.setItem("token", res.data.token);

        // redirect to dashboard
        window.location.href = `https://main.d1pxry1t6dirmh.amplifyapp.com/?token=${encodeURIComponent(
          res.data.token
        )}`;
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Login</h3>

      <form className="card p-4 shadow" onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success w-100">Login</button>

        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
