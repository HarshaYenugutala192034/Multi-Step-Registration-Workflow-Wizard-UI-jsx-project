import React from "react";

export default function Step3({ data }) {
  return (
    <>
      <h2>Review</h2>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Email:</b> {data.email}</p>
    </>
  );
}
