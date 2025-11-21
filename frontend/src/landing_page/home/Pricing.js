import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 ">
      <div className="row d-flex align-items-center">
        <div className="col-6" style={{ paddingLeft: "75px" }}>
          <h2 className="mb-3">Unbeatable Pricing</h2>
          <p>
            We pioneered the concept of discount broking and price<br></br>{" "}
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a className="" style={{ textDecoration: "none" }} href="">
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-6">
          <div className="row ">
            <div className="border text-center col-6">
              <h2 className="mt-5 mb-4">₹0</h2>
              <p className="mb-5">
                Free equity delivery and <br></br> direct mutual funds
              </p>
            </div>
            <div className="border text-center col-6">
              <h2 className="mt-5 mb-4">₹20</h2>
              <p className="mb-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
