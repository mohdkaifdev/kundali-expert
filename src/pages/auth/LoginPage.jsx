import React from "react";
import { Link } from "react-router-dom";
import SocialBLoginWithMobile from "../../components/auth/LoginWithMobile";
import LoginWithGmail from "../../components/auth/LoginWithGmail";
import LoginWithFacebook from "../../components/auth/LoginWithFacebook";

const LoginPage = () => {
  return(
    <>
      <section>
        <div className="login_section b_space_top">
            <div className="container">
                <div className="heading_sec text-center">
                    <h2 className="mrn_clr">Welcome To Kundali Expert</h2>
                    <p className="gray_clr">(For Customized Horoscope Go to Personalized Report section)</p>
                </div>
                <div className="login_block text-center pt-lg-2">
                    <h3 className="gray_clr mb-4 pb-lg-2">Sign Up</h3>
                    <ul>
                        <li>
                          <SocialBLoginWithMobile/>
                        </li>
                        <li>
                          <LoginWithGmail/>
                        </li>
                        <li>
                          <LoginWithFacebook/>
                        </li>
                    </ul>
                    <div className="para_sec">
                        <p>By using our services, You are agreeing to our Terms and Conditions and Privacy Policy.</p>
                        <p>Already a user? <a href="#">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
export default LoginPage;