import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 ">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          type="button"
          class="btn btn-primary "
          style={{ width: "15%", margin: "auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
