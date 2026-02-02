import React from "react";
import DOBSelector from "../../components/auth/profile-setup/DOBSelector";
import DOBBackButton from "../../components/auth/profile-setup/DOBBackButton";
import DOBNextButton from "../../components/auth/profile-setup/DOBNextButton";

export default function UserDOBPage() {
  return (
    <>
    <section>
      <div className="login_section b_space_top">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="mrn_clr">Date of Birth</h2>
          </div>

          <div className="login_block text-center pt-lg-2">
            <h4 className="gray_clr mb-4 pb-lg-2">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h4>

            <form>
              <div className="form_group w-100">
                <div className="birth_btns d-flex gap-2">
                  <DOBSelector />
                </div>
              </div>

              <div className="form_btnss d-flex gap-md-3 gap-2 mt-4">
                <DOBBackButton />
                <DOBNextButton nextPage="/user-tob" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}