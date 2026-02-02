import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function TimeNextButton({ nextPage }) {
  const navigate = useNavigate();

  const handleNext = () => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");

    if (!profile.time) {
      toast.error("Please select your time of birth");
      return;
    }

    toast.success("Time of birth saved!");
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