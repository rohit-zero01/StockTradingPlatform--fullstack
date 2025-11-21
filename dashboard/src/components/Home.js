import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check if token was passed in URL (after login)
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");

    if (tokenFromUrl) {
      // Save the token for dashboard origin
      localStorage.setItem("token", tokenFromUrl);

      // Clean URL
      params.delete("token");
      const newUrl =
        window.location.pathname +
        (params.toString() ? "?" + params.toString() : "");
      window.history.replaceState({}, "", newUrl);
    }

    // 2. Now check localStorage for token
    const token = localStorage.getItem("token");

    if (!token) {
      // Not logged in → go to frontend login
      window.location.href = "http://localhost:3000/login";
      return;
    }

    // Token exists → load dashboard
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 20 }}>
        <strong>Loading dashboard...</strong>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
