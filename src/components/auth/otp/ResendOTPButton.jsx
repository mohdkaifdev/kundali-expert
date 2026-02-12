import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../../services/api";

export default function ResendOTPButton() {
  const [timer, setTimer] = useState(300);
  const [canResend, setCanResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // Timer countdown
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

  // Format timer as MM:SS
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleResend = async () => {
    if (!canResend || resendLoading) return;

    setResendLoading(true);
    setCanResend(false);
    setTimer(300); // reset timer

    try {
     const payload = {
      formData: {
        mobile: localStorage.getItem("mobile"),
        deviceId: localStorage.getItem("deviceId"),
        countryCode: localStorage.getItem("countryCode"),
        requestId: "532754327",
        haveNotch: false,
        deviceCountry: "India",
      },
    };

      const res = await api.post("/otp/resendOTP", payload);

      if (res.data.response.responseCode === "200") {
        toast.success("OTP resent successfully!");
      } else {
        toast.error(res.data.response.responseMessage || "Failed to resend OTP");
      }
    } catch (err) {
      toast.error("Failed to resend OTP. Try again later.");
      console.error(err);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="mt-4 text-center">
      {canResend ? (
        <button
          type="button"
          className="btn btn-link text-purple fw-bold"
          onClick={handleResend}
          disabled={resendLoading}
        >
          {resendLoading ? "Resending..." : "Resend OTP"}
        </button>
      ) : (
        <p className="text-muted mb-0">
          Resend OTP in <strong>{formatTimer()}</strong>
        </p>
      )}
    </div>
  );
}