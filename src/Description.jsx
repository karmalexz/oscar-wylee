import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="text-block">
      <div className="heading">About the Frames</div>
      <div className="description-left">
        <p>
          A classic brow-line glasses, reimagined. Marco has spring hinges and
          an adjustable nose fit for maximum comfort (and style). Now available
          in small.
        </p>
      </div>

      <div className="description-right">
        <h2 className="title">Made from Acetate</h2>
        <div className="table">
          <p className="table-title">
            FRAME FIT <span>WIDE</span>
          </p>
          <p className="table-title table-measurements">
            MEASUREMENTS <span>56 - 19 - 148</span>
          </p>
        </div>
        <p className="measurements-description">
          These measurements mean lens width, bridge, and temple length in
          millimeters(mm). They can be found on the inside of the temple arm. If
          you already have a pair that you like, you can compare it to these
          measurements.
        </p>
        <div className="box-text">
          <p className="box-text-1">
            Filter category 3 - General purpose sunglasses. High protection
            against sunglare. Good UV Protection. Not suitable for driving in
            twilight, at night or under dull conditions
          </p>
          <p className="box-text-2">
            This frame comes with polarized lenses. An additional $100 will be
            added to your order total for prescription orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
