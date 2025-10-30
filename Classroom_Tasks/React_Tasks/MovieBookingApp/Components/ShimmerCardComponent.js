import React from "react";
import "/styles/Shimmer.css";

const ShimmerCardComponent = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-line shimmer-title"></div>
      <div className="shimmer-line shimmer-text"></div>
      <div className="shimmer-line shimmer-text short"></div>
      <div className="shimmer-button"></div>
    </div>
  );
};

export default ShimmerCardComponent;
