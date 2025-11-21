import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/signup", {
        username,
        email,
        password,
      })
      .then(() => {
        window.location.href = "/login";
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Signup failed");
      });
  };

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Create Account</h3>

      <form className="card p-4 shadow" onSubmit={handleSignup}>
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
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100">Sign Up</button>

        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
