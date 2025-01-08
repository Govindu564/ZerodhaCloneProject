import React from "react";
import LeftSection from "./LeftSection";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center border-bottom mb-5 mt-5 p-5">
        <h1>Technology</h1>
        <h3 className="text-muted mt-2 fs-5 ">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;


