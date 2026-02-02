import React from "react";
import WelcomeHeader from "../../components/auth/profile-setup/WelcomeHeader";
import WelcomeImage from "../../components/auth/profile-setup/WelcomeImage";
import WelcomeContinueButton from "../../components/auth/profile-setup/WelcomeContinueButton";

export default function WelcomePage() {
  return (
    <section>
      <div className="login_section b_space_top">
        <div className="container">
          <div className="heading_sec text-center mb-3">
            <WelcomeHeader />
          </div>

          <div className="welcome_block text-center">
            <div className="welcome_img mb-4">
              <WelcomeImage />
            </div>

            <div className="login_btn">
              <WelcomeContinueButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}