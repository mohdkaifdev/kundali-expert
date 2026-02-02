import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import GenderOption from "./profile-setup/GenderOption";

const UserGenderPage = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const navigate = useNavigate();

  // Page load hone par saved gender set karo
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    if (profile.gender) {
      setSelectedGender(profile.gender);
    }
  }, []);

  const handleGenderNext = () => {
    if (!selectedGender) {
      toast.error("Please select your gender");
      return;
    }

    // Save before going next
    const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
    localStorage.setItem("userProfile", JSON.stringify({ ...existing, gender: selectedGender }));
    navigate("/user-dob");
  };

  return (
    <>
    <section>
      <div className="login_section b_space_top">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="mrn_clr">Please Choose Your Gender</h2>
          </div>

          <div className="login_block text-center pt-lg-2">
            <form>
             <div className="form_group w-100">
                <div className="birth_btns d-flex flex-wrap">
                    <GenderOption label="Male" icon="♂" value="MALE" selectedGender={selectedGender} setSelectedGender={setSelectedGender}/>
                    <GenderOption label="Female" icon="♀" value="FEMALE" selectedGender={selectedGender} setSelectedGender={setSelectedGender}/>
                    <GenderOption label="Other" icon="⚧" value="OTHER" selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
                </div>
            </div>

              <div className="form_btnss d-flex gap-md-3 gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-primary site_btn w-100"
                  onClick={handleGenderNext}
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

export default UserGenderPage;