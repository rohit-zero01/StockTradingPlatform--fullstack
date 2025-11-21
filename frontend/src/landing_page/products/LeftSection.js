import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-6">
          <img src={imageUrl} style={{ paddingLeft: "20px" }} />
        </div>
        <div
          className="col-6"
          style={{ paddingTop: "40px", paddingLeft: "50px" }}
        >
          <h2>{productName}</h2>
          <p style={{ maxWidth: "500px" }} className="text-muted">
            {productDescription}
          </p>
          <div className="mb-3">
            <a href={tryDemo}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a style={{ paddingLeft: "30px" }} href={learnMore}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ paddingLeft: "20px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
