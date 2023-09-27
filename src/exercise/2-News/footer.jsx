import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row1"></div>
      <div className="row2">
        <div className="col">
          <h3>
            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            24
          </h3>
          <p>
            Feel the excitement of being mobile just at the comfort of your
            home. News24 is here to keep you updated about the happenings across
            the globe
          </p>
          <div className="footer-media"></div>
        </div>
        <div className="col">column two</div>
        <div className="col">column three</div>
        <div className="col">column four</div>
      </div>
      <div className="footer-line"></div>
      <div footer-sponsor></div>
    </div>
  );
};

export default Footer;
