import React, { useEffect } from "react";

const GenderOption = ({ label, icon, value, selectedGender, setSelectedGender }) => {
  const isSelected = selectedGender === value;

  // Page load hone par saved gender highlight karo
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    if (profile.gender === value) {
      setSelectedGender(value);
    }
  }, [value, setSelectedGender]);

  const handleClick = () => {
    setSelectedGender(value); // state update

    // Real-time save in localStorage
    const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
    localStorage.setItem("userProfile", JSON.stringify({ ...existing, gender: value }));
  };

  return (
    <div className="div">
      <button
        type="button"
        onClick={handleClick}
        className={`site_btn w-100 py-4 text-xl font-medium transition-all ${
          isSelected
            ? "gender_selected bg-purple-600 text-white shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-purple-100"
        }"
        }`}
      >
        {icon} {label}
      </button>
    </div>
  );
};

export default GenderOption;