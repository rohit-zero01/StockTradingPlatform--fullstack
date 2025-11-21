import React from "react";
function Hero() {
  return (
    <div
      className="container text-center border-bottom"
      style={{ paddingBottom: "50px" }}
    >
      <div className="mt-5">
        <h1 className="mb-3">Pricing</h1>
        <h7 className="text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h7>
      </div>
      <div className="row">
        <div className="col-4">
          <img src="media/images/pricing0.svg" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE),<br></br> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat Rs. 20 or 0.03% (whichever is lower)<br></br> per executed
            order on intraday trades<br></br> across equity, currency, and
            commodity<br></br> trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are<br></br> absolutely free — ₹
            0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
