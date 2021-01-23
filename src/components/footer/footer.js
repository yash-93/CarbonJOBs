import React from "react";

import "./footer.css";

const Footer = () => {
  const openAlert = () => {
    window.alert("This feature will be available soon.");
  };

  return (
    <section id="footer">
      <div id="footer-title">Join us on</div>
      <div id="footer-links">
        <i className="fab fa-instagram fa-2x" onClick={openAlert}></i>
        <i className="fab fa-youtube fa-2x" onClick={openAlert}></i>
        <i className="fab fa-linkedin fa-2x" onClick={openAlert}></i>
      </div>
      <div>
        <i className="fas fa-copyright"></i> 2021 : carbonjobs.com
      </div>
    </section>
  );
};

export default Footer;
