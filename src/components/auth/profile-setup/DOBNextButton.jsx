import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function DOBNextButton({ nextPage }) {
  const navigate = useNavigate();

  const handleNext = () => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");

    if (!profile.dob) {
      toast.error("Please select your date of birth");
      return;
    }

    toast.success("Date of Birth saved!");
    navigate(nextPage);
  };

  return (
    <>
    <button
      type="button"
      className="btn btn-primary site_btn"
      onClick={handleNext}
    >
      Next
    </button>
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