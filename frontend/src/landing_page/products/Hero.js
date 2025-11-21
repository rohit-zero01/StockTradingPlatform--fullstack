import React from "react";
function Hero() {
  return (
    <div className="container">
      <div
        style={{ marginTop: "70px", paddingBottom: "70px" }}
        className="text-center border-bottom"
      >
        <h2 className="mb-3">Technology</h2>
        <h5 className="mb-3">Sleek, modern and intuitive trading platforms </h5>
        <p>
          Checkout our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{"     "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
