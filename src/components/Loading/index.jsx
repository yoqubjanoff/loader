import React from "react";
import "./style.css";

const Loading = () => {
  const dots = [];

  for (let i = 1; i <= 20; i++) {
    dots.push(<span key={i} style={{ "--i": i }}></span>);
  }

  return (
    <div className="wrapper">
      <div className="loading">{dots}</div>
    </div>
  );
};

export default Loading;
