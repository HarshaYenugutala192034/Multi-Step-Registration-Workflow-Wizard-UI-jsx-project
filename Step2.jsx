import React from "react";

export default function Step2({ data, handleChange }) {
  return (
    <>
      <h2>Account Info</h2>
      <input
        type="password"
        placeholder="Password"
        onChange={handleChange("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange("confirmPassword")}
      />
    </>
  );
}
