// components/auth/profile-setup/DOBSelector.jsx

import React, { useState, useEffect } from "react";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "Month", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

export default function DOBSelector() {
  const today = new Date();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Load from localStorage OR set today's date as default
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");

    if (profile.dob) {
      // Agar pehle se saved hai toh wahi dikhao
      const d = new Date(profile.dob);
      setDay(d.getDate());
      setMonth(d.getMonth()); // 0-based
      setYear(d.getFullYear());
    } else {
      // Naya user → aaj ki date default set kar do
      setDay(today.getDate());
      setMonth(today.getMonth()); // 0-based (January = 0)
      setYear(today.getFullYear());

      // Aur localStorage mein bhi save kar do taaki Next button ko pata chale
      const defaultDOB = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      localStorage.setItem("userProfile", JSON.stringify({ ...profile, dob: defaultDOB }));
      
      window.dispatchEvent(new Event("dobChanged"));
    }
  }, []);

  // Auto-save whenever any field changes
  const saveDOB = (d, m, y) => {
    if (d && m !== "" && y) {
      const dateStr = `${y}-${String(Number(m) + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
      localStorage.setItem("userProfile", JSON.stringify({ ...existing, dob: dateStr }));
      window.dispatchEvent(new Event("dobChanged"));
    }
  };

  return (
    <>
      {/* Day */}
      <select
        className="form-select input_sec"
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
          saveDOB(e.target.value, month, year);
        }}
      >
        <option value="">Day</option>
        {days.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      {/* Month */}
      <select
        className="form-select input_sec"
        value={month}
        onChange={(e) => {
          setMonth(e.target.value);
          saveDOB(day, e.target.value, year);
        }}
      >
        {months.map((m, i) => (
          <option key={i} value={i}>{m}</option>
        ))}
      </select>

      {/* Year */}
      <select
        className="form-select input_sec"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
          saveDOB(day, month, e.target.value);
        }}
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </>
  );
}