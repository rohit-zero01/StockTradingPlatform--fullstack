import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero image"
          className="mb-5"
        />
        <h1 className="mt-5 ">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivative, mutual funds, and
          more
        </p>
        <Link
          to="/signup"
          className="btn btn-primary"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
