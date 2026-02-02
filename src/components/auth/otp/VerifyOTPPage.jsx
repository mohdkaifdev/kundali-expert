import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import OTPHeader from "./OTPHeader";
import OTPInputBoxes from "./OTPInputBoxes";
import OTPSubmitButton from "./OTPSubmitButton";
import OTPBottomLinks from "./OTPBottomLinks";
import ResendOTPButton from "./ResendOTPButton";
import api from "../../../services/api";

const VerifyOTPPage = () => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
   const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(1); // 5 minutes = 300 seconds
  const [canResend, setCanResend] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation pehle
    if (otpCode.length !== 4) {
      toast.warn("Please enter 4-digit OTP");
      return;
    }

    setLoading(true);

    const payload = {
      formData: {
        mobile: localStorage.getItem("mobile"),
        deviceId: localStorage.getItem("deviceId"),
        otp: otpCode,
        requestId: "532754327",
        haveNotch: false,
        deviceCountry: "India",
      },
    };

    try {
      const res = await api.post("/v1/otp/verifyOTP", payload);

      if (res.data.response.responseCode === "200") {
        // Success
        localStorage.setItem("token", res.data.data.accessToken);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("refreshToken", res.data.data.refreshToken);

        // Get user data
        const res2 = await api.get("/v1/user/my");
        const user = res2.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        
        toast.success("OTP Verified Successfully!");
        console.log(user);
        if (!user.name || user.name.trim() === "") 
          {
         window.location.href = "/username";
        }else{
          window.location.href = "/";
        }
      } else if (res.data.response.responseCode === "401") {
        toast.error(res.data.response.responseMessage || "Invalid OTP");
      } else {
        toast.error(res.data.response.responseMessage || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("OTP Verification Error:", err);
      if (err.response?.data?.response?.responseMessage) {
        toast.error(err.response.data.response.responseMessage);
      } else {
        toast.error("Network error or blocked. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="login_section b_space_top">
        <div className="container">
          <OTPHeader />
          <div className="login_block text-center pt-lg-2">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4 d-flex justify-content-center">
                <OTPInputBoxes onComplete={setOtpCode} />
              </div>

              <OTPSubmitButton loading={loading} isValid={otpCode.length === 4} />
              <ResendOTPButton/>
            </form>

            <OTPBottomLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOTPPage;