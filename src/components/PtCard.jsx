import React from "react";

function PtCard(props) {
  return (
    <div className="property-card">
      <img
        className="property-img"
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
