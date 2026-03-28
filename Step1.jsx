import React from "react";

export default function Step1({ data, handleChange }) {
  return (
    <>
      <h2>Personal Info</h2>
      <input
        placeholder="Name"
        value={data.name}
        onChange={handleChange("name")}
      />
      <input
        placeholder="Email"
        value={data.email}
        onChange={handleChange("email")}
      />
    </>
  );
}
