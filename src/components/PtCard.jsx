import React from "react";

function PtCard(props) {
  return (
    <div className="property-card">
      <img
        className="property-img"
        src={props.image}
        alt="Property"
      />

      <div className="property-dts">
        <h5 className="location">{props.title}</h5>
        <h2 className="specs">{props.specs}</h2>
        <h3 className="rent">{props.rent}</h3>
      </div>
    </div>
  );
}

export default PtCard;
