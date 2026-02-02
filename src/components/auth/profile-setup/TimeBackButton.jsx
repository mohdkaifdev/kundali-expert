import React from "react";
import { useNavigate } from "react-router-dom";

export default function TimeBackButton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn btn-primary site_btn" onClick={() => navigate(-1)}>
      Back
    </button>
  );
}