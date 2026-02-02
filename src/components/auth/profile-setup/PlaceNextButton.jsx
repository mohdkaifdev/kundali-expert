// PlaceNextButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PlaceNextButton({ onNext }) {
  return (
    <button type="button" className="btn btn-primary site_btn" onClick={onNext}>
      Next
    </button>
  );
}