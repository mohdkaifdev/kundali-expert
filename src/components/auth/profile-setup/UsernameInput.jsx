import React, { useState, useEffect } from "react";

const UsernameInput = () => {
  const [name, setName] = useState("");

  // Page load hone par saved name load karo
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const data = JSON.parse(saved);
      if (data.name) {
        setName(data.name);
      }
    }
  }, []);

  // Har keystroke par save karo (real-time save)
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    // Real-time save (trimmed)
    const trimmed = value.trim();
    const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
    localStorage.setItem(
      "userProfile",
      JSON.stringify({ ...existing, name: trimmed || value }) // agar empty bhi ho to save
    );
  };

  return (
    <div className="form_group w-100">
      <input
        type="text"
        className="w-100 input_sec"
        value={name}
        onChange={handleChange}
        placeholder="Your Name"
        autoFocus
      />
    </div>
  );
};

export default UsernameInput;