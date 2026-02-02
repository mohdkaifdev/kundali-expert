import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UsernameInput from "./profile-setup/UsernameInput";

const UsernamePage = () => {
  const [currentName, setCurrentName] = useState("");
  const navigate = useNavigate();

  // Real-time name track karo (localStorage se)
  useEffect(() => {
    const checkName = () => {
      const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");
      setCurrentName(profile.name || "");
    };

    checkName(); // pehli baar
    window.addEventListener("storage", checkName);
    const interval = setInterval(checkName, 500); // backup polling

    return () => {
      window.removeEventListener("storage", checkName);
      clearInterval(interval);
    };
  }, []);

  const handleUserNext = () => {
    const trimmed = currentName.trim();
    if (!trimmed) {
      toast.error("Name is required");
      return;
    }

    if (trimmed.length < 2) {
      toast.warning("Name should be at least 2 characters");
      return;
    }

    if (trimmed.length > 50) {
      toast.warning("Name is too long (max 50 characters)");
      return;
    }

    navigate("/user-gender");
  };

  return (
    <>
    <section>
      <div className="login_section b_space_top">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="mrn_clr">Acquainted</h2>
          </div>

          <div className="login_block text-center pt-lg-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <UsernameInput />

              <div className="form_btnss d-flex gap-md-3 gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-primary site_btn w-100"
                  onClick={handleUserNext}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
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
};

export default UsernamePage;