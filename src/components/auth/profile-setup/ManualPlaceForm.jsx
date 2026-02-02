import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ManualPlaceForm({ onSave }) {
  const [inputs, setInputs] = useState(Array(4).fill("")); // 4 fields as per your request

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddPlace = () => {
    const placeName = inputs.filter(v => v.trim()).join(", ");

    if (!placeName) {
      toast.error("Please fill at least one field");
      return;
    }

    // Save to localStorage
    const saveData = {
      birthPlaceId: "manual",
      birthPlaceName: placeName,
      birthPlaceLatitude: "0",
      birthPlaceLongitude: "0",
      timezoneId: 1, // default India
    };

    const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
    localStorage.setItem("userProfile", JSON.stringify({ ...existing, ...saveData }));

    toast.success("Manual place added successfully!");

    // Navigate via parent
    if (onSave) onSave();
  };

  return (
    <>
      {inputs.map((value, index) => (
        <div key={index} className="form_group mb-2 w-100">
          <input
            type="text"
            className="form-control w-100"
            value={value}                   // ← YE LINE ADD KI HAI (controlled input)
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Field ${index + 1}`}
          />
        </div>
      ))}

      <div className="login_btn">
        <button
          type="button"
          className="site_btn purple_bg w-100"
          onClick={handleAddPlace}
        >
          Add Place
        </button>
      </div>
         <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
    </>
  );
}