import React from "react";

import "./header.css";

const Header = () => {
  const goToJobs = () => {
    document.getElementById("jobs-section").scrollIntoView();
  };

  const openAlert = () => {
    window.alert("This feature will be available soon.");
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <section id="header">
      <h1 id="brand" onClick={reload}>
        Carbon JOBs
      </h1>
      <div id="nav">
        <ul>
          <li onClick={goToJobs}>Explore</li>
          <li onClick={openAlert}>Login/Signup</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
