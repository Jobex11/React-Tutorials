import React, { useState } from "react";
import "./form.css";

const Main = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <button onClick={handleNext}>Next</button>
          </div>
        );

      case 2:
        return (
          <div>
            <h2>Step 2: Contact Information</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        );

      case 3:
        return (
          <div>
            <h2>Step 3: Account Setup</h2>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // You can submit the form data here or perform any other action.
    // For this example, we'll just log the data to the console.
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h1>Form Carousel</h1>
      {renderStep()}
    </div>
  );
};

export default Main;
