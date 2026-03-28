import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Registration Wizard</h1>

      <ProgressBar step={step} />

      {step === 1 && (
        <Step1 data={formData} handleChange={handleChange} />
      )}

      {step === 2 && (
        <Step2 data={formData} handleChange={handleChange} />
      )}

      {step === 3 && <Step3 data={formData} />}

      <div className="buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && (
          <button onClick={() => alert("Form Submitted!")}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
