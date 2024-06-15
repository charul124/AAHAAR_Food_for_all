import React, { useState } from "react";
import "../screens/RegistrationForm.css";
import { useNavigate } from "react-router-dom";

export const NGORegistrationForm = () => {
  const [formData, setFormData] = useState({
    NGOName: "",
    email: "",
    contactInfo: "",
    telephoneNo: "",
    description: "",
    AreaPincode: "",
    state: "",
    city: "",
    fullAddress: "",
    category: "",
    verificationNumber: "",
    DateOfEstablishment: "",
    website: "",
  });
  const navigate = useNavigate();

  const handleSubmitClick = async () => {
    // Replace the following line with the actual API call to your backend
    // You can use fetch or axios for this purpose
    const response = await fetch('http://localhost:3001/api/ngo-registration-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Form submitted successfully:', data.message);
      navigate("/");
    } else {
      console.error('Error submitting form:', response.statusText);
      // Handle the error as needed
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mx-auto p-5">
      <form className="bg-white m-3">
        <div
          className="flex justify-between mb-15"
          style={{ marginRight: "50px" }}
        >
          <div className="mb-[20px]">
            <div className="text-[65px] font-Poppins-Medium font-[700] mt-[-20px]">
              Aahaar
              <img
                className="absolute h-[65px] w-[70px] ml-[210px] mt-[-70px]"
                alt="Logo"
                src="logo.png"
              />
            </div>
            <div className="text-[16px] font-Poppins-Medium font-[350] mt-[-15px] ml-[50px]">
              an uphaar to all
            </div>
          </div>
          <div className="text-[40px] font-Poppins-Medium font-[700]">
            Join us and Register to be part of our community
          </div>
        </div>
        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="NGOName">
              NGO Name
            </span>
            <input
              type="text"
              placeholder="NGO Name"
              name="NGOName"
              value={formData.NGOName}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="email">
              Email
            </span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
        </div>

        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="contactInfo">
              Contact Info
            </span>
            <input
              type="text"
              placeholder="Contact info"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>

          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="verificationNumber">
              Verification Number
            </span>
            <input
              type="text"
              placeholder="Verification Number"
              name="verificationNumber"
              value={formData.verificationNumber}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
        </div>

        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="description">
              Description
            </span>
            <textarea
              name="description"
              placeholder="description"
              cols="70"
              rows="10"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-2">
              </textarea>
          </div>
        </div>
        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="AreaPincode">
              Pincode
            </span>
            <input
              type="text"
              placeholder="Pincode"
              name="AreaPincode"
              value={formData.AreaPincode}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="state">
              State
            </span>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
        </div>

        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="city">
              City
            </span>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="fullAddress">
              Full Address
            </span>
            <input
              type="text"
              placeholder="Full Address"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
        </div>

        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="category">
              Category
            </span>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="border p-2"
            >
              <option value="">Select Category</option>
              <option value="Option 1">Food and essentials</option>
              <option value="Option 2">Old age</option>
              <option value="Option 3">Rural Development</option>
              <option value="Option 4">Education and Literacy</option>
              <option value="Option 5">Health and Family welfare</option>
              <option value="Other">Other</option>
            </select>
            {formData.category === "Other" && (
              <input
                type="text"
                placeholder="Enter Other Category"
                name="otherCategory" // Change the name attribute here
                value={formData.otherCategory}
                onChange={handleInputChange}
                className="border p-2 ml-2"
              />
            )}
          </div>
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="telephoneNo">
              Telephone No.
            </span>
            <input
              type="text"
              placeholder="Telephone no."
              name="telephoneNo"
              value={formData.telephoneNo}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
        </div>

        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="DateOfEstablishment">
              Date of Establishment
            </span>
            <input
              type="date"
              placeholder="Date"
              name="DateOfEstablishment"
              value={formData.DateOfEstablishment}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
          <div className="input" style={{ marginRight: "50px" }}>
            <span className="label" htmlFor="website">
              Website
            </span>
            <input
              type="url"
              placeholder="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="border p-2"
            />
          </div>
        </div>

        <div className="flex justify-between mb-15">
          <div className="input" style={{ marginRight: "50px" }}>
            <button
              className="bg-green-600 w-full text-white p-2 rounded hover:bg-green-700"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};