import React, { useState, useEffect } from "react";

const hours = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
const minutes = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));

export default function TimeSelector() {
  const now = new Date();

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  // Load saved time OR set current time as default
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");

    if (profile.time) {
      // Agar pehle se time saved hai → wahi dikhao
      const [h, m] = profile.time.split(":");
      setHour(h);
      setMinute(m);
    } else {
      // Naya user → current time default set kar do
      const currentHour = String(now.getHours()).padStart(2, "0");
      const currentMinute = String(now.getMinutes()).padStart(2, "0");

      setHour(currentHour);
      setMinute(currentMinute);

      // LocalStorage mein bhi save kar do taaki Next button ko pata chale
      const timeStr = `${currentHour}:${currentMinute}`;
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ ...profile, time: timeStr })
      );

      window.dispatchEvent(new Event("timeChanged"));
    }
  }, []);

  // Save time whenever hour or minute changes
  const saveTime = (h, m) => {
    if (h && m) {
      const timeStr = `${h}:${m}`;
      const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
      localStorage.setItem("userProfile", JSON.stringify({ ...existing, time: timeStr }));
      window.dispatchEvent(new Event("timeChanged"));
    }
  };

  return (
    <>
      {/* Hour */}
      <select
        className="form-select input_sec"
        value={hour}
        onChange={(e) => {
          setHour(e.target.value);
          saveTime(e.target.value, minute);
        }}
      >
        <option value="">HH</option>
        {hours.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>

      {/* Minute */}
      <select
        className="form-select input_sec"
        value={minute}
        onChange={(e) => {
          setMinute(e.target.value);
          saveTime(hour, e.target.value);
        }}
      >
        <option value="">MM</option>
        {minutes.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </>
  );
}