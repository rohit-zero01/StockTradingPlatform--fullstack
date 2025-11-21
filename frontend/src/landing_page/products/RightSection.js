import React from "react";

function RightSection({ imageUrl, productName, productDescription, tryDemo }) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "70px" }}>
        <div
          className="col-6"
          style={{ paddingTop: "100px", paddingLeft: "50px" }}
        >
          <h2>{productName}</h2>
          <p style={{ maxWidth: "500px" }} className="text-muted">
            {productDescription}
          </p>
          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} style={{ paddingRight: "50px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
