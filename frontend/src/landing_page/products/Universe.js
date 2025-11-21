import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>The Xerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center  mt-5">
        <div className="col-4 p-3 " style={{ paddingLeft: "100px" }}>
          <ul>
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "50%", marginBottom: "15px" }}
            />

            <p
              style={{ marginBottom: "70px" }}
              className="text-muted text-small"
            >
              Thematic investment platform
            </p>

            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%", marginBottom: "15px" }}
            />
            <p className="text-muted">Asset management</p>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <img
              src="media/images/streakLogo.png"
              style={{ width: "30%", marginBottom: "15px" }}
            />
            <p style={{ marginBottom: "70px" }} className="text-muted">
              Algo & strategy platform
            </p>

            <img
              src="media/images/goldenpiLogo.png"
              style={{ width: "45%", marginBottom: "15px" }}
            />
            <p className="text-muted  mx-auto">Bonds trading platform</p>
          </ul>
        </div>
        <div className="col-4" style={{ paddingRight: "100px" }}>
          <ul>
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "60%", marginBottom: "15px" }}
            />
            <p style={{ marginBottom: "80px" }} className="text-muted">
              Option trading platform
            </p>

            <img
              src="media/images/dittoLogo.png"
              style={{ width: "25%", marginBottom: "15px" }}
            />
            <p className="text-muted">Asset management</p>
          </ul>
        </div>
        <button
          type="button"
          class="btn btn-primary mt-5  d-block mx-auto "
          style={{ width: "15%", marginBottom: "100px" }}
        >
          Signup Now
        </button>
      </div>

      <div></div>
    </div>
  );
}

export default Universe;
