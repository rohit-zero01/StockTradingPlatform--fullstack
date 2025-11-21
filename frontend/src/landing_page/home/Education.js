import React from "react";

function Education() {
  return (
    <div className="container mb-5" style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="col-6 text-center">
          <img style={{ width: "70%" }} src="media/images/education.svg"></img>
        </div>
        <div className="col-6">
          <h3 className="mb-5">Free and open market education</h3>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            <br></br>
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            <br></br>
            India for all your market related queries.
          </p>
          <a className="" style={{ textDecoration: "none" }} href="">
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
