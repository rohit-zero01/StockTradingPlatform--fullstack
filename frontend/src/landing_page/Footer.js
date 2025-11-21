import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid bg-body-tertiary"
      style={{ paddingLeft: "100px", paddingRight: "100px" }}
    >
      <hr
        style={{
          margin: 0,
          width: "100vw",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="row mt-5 ">
        <div className="col-3">
          <a class="navbar-brand" href="#">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
          </a>
          <p className="mt-3" style={{ fontSize: "0.8rem" }}>
            ©2010 - 2024, Not Zerodha Broking Ltd.<br></br> All rights reserved.
          </p>
          <div
            className=" d-flex justify-content-start align-items-center gap-3 text-muted"
            style={{ fontSize: "1.25rem" }}
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-telegram" aria-hidden="true"></i>
          </div>
        </div>

        <div className="col-3">
          Company
          <div className="mt-3 text-muted d-flex flex-column">
            <a href="#" className="text-muted text-decoration-none mb-2">
              About
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Product
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Pricing
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Referal Programme
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Careers
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Zerodha.tech
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Press & media
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Zerodha Cares (CSR)
            </a>
          </div>
        </div>

        <div className="col-3">
          Support
          <div className="mt-3 text-muted d-flex flex-column">
            <a href="#" className="text-muted text-decoration-none mb-2">
              Contact
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Z-Connect blog
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Pricing
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              List of Charges
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Downloads & resources
            </a>
          </div>
        </div>

        <div className="col-3">
          Account
          <div className="mt-3 text-muted d-flex flex-column">
            <a href="#" className="text-muted text-decoration-none mb-2">
              Open an account
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              Fund transfer
            </a>
            <a href="#" className="text-muted text-decoration-none mb-2">
              60 day challenge
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p style={{ fontSize: "0.8rem", textAlign: "justify" }}>
          Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p style={{ fontSize: "0.8rem", textAlign: "justify" }}>
          {" "}
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p style={{ fontSize: "0.8rem", textAlign: "justify" }}>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p style={{ fontSize: "0.8rem", textAlign: "justify" }}>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </div>
  );
}

export default Footer;
