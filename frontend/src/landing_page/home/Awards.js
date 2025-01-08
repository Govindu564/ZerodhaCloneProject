import React from "react";
function Awards() {
  return (
    <div className="container mb-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="award image" />
        </div>
        <div className="col-6 p-5 mt-4">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million zerodha clients contribute to over 15% of all retail
            order volumes in india daily by tradingh and inversting in:{" "}
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Frutures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              className="mb-5 "
              src="media/images/pressLogos.png"
              alt="presslogos"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
