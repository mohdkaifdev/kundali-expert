import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";

export default function WelcomeContinueButton() {
  const navigate = useNavigate();

  const handleContinue = async () => {
  const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");

  const payload = {
    formData: {
    name: profile.name || "Mohammad Kaif",
    gender: profile.gender || "MALE",
    birthDateAndTime: `${profile.dob || "2025-12-08"}T${profile.time || "19:17"}:00`,
    birthPlaceId: profile.birthPlaceId ? (profile.birthPlaceId === "manual" ? 187835 : Number(profile.birthPlaceId)) : 187835,
    birthPlaceName: profile.birthPlaceName || "Sultanpur Railway Station Road, Majar Ganj, Sultanpur, Uttar Pradesh",
    birthPlaceLatitude: profile.birthPlaceLatitude ? parseFloat(profile.birthPlaceLatitude) : 26.264610290527344,
    birthPlaceLongitude: profile.birthPlaceLongitude ? parseFloat(profile.birthPlaceLongitude) : 82.06705474853516,
    birthDateAndTimeGmt: `${profile.dob || "2025-12-08"} ${profile.time || "19:17"}:00 Asia/Kolkata`,
    timezoneId: profile.timezoneId ? Number(profile.timezoneId) : 1,
    languageId: 1,
    }
  };

  //console.log("Final Registration Payload:", payload);

  try {
    const res = await api.post("/user/registration", payload);

    if (res.data.response.responseCode === "200") {
      toast.success("Registration completed successfully!");
      // Navigate to home or dashboard
      navigate("/");
    } else {
      toast.error(res.response?.responseMessage || "Registration failed");
    }
  } catch (error) {
    console.error("Registration error:", error);
    toast.error("Network error. Please try again.");
  }
};

  return (
    <>
    <button
      type="button"
      className="site_btn purple_bg w-100"
      onClick={handleContinue}
    >
      Continue
    </button>

    </>
  );
}