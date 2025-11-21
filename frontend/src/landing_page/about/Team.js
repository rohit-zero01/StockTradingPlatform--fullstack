import React from "react";
function Team() {
  return (
    <div className="container">
      <h1
        className="border-top text-center"
        style={{ marginTop: "50px", paddingTop: "50px" }}
      >
        People
      </h1>
      <div className="row mt-5" style={{ paddingTop: "50px" }}>
        <div className="col-6 ">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Example"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              marginLeft: "275px",
            }}
          />
          <div style={{ marginLeft: "340px" }} className="text-muted">
            <h5 className="mt-5">Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col-6 text-muted " style={{ maxWidth: "500px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
