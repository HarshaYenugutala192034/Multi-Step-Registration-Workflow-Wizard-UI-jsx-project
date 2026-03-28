import React from "react";

export default function ProgressBar({ step }) {
  return (
    <div className="progress">
      <div className={`circle ${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`circle ${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`circle ${step >= 3 ? "active" : ""}`}>3</div>
    </div>
  );
}
