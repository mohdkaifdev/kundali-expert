import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import OTPHeader from "./OTPHeader";
import OTPInputBoxes from "./OTPInputBoxes";
import OTPSubmitButton from "./OTPSubmitButton";
import OTPBottomLinks from "./OTPBottomLinks";
import ResendOTPButton from "./ResendOTPButton";
import api from "../../../services/api";
import { loginSuccess } from "../../../features/auth/authSlice";
import { setUser, fetchMyProfile } from "../../../features/user/userSlice";
import { setSubUser } from "../../../features/subuserslice/subuserSlice";
import { setBag } from "../../../features/bag/bagSlice";
import { setBalance } from "../../../features/wallet/walletSlice";
import { setKundali, setVargKundali } from "../../../features/kundali/kundaliSlice";

const VerifyOTPPage = () => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    // verify otp
    try {
      const res = await api.post("/v1/otp/verifyOTP", payload);

      if (res.data.response.responseCode === "200") {
        const { accessToken, refreshToken } = res.data.data;
 localStorage.setItem("token", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
        // ✅ Store auth in Redux
        dispatch(
          loginSuccess({
            accessToken,
            refreshToken,
          })
        );

        // ✅ Fetch user via thunk
        const userResult = await dispatch(fetchMyProfile());
        const user = userResult?.payload;
        // fallback: if thunk didn't return payload, try to get from API directly
        if (!user) {
          try {
            const userRes = await api.get('/v1/user/my');
            const u = userRes?.data?.data ?? userRes?.data ?? null;
            if (u) dispatch(setUser(u));
          } catch (e) {
            console.warn('Failed to fetch user fallback', e);
          }
        }

        const subUserRes = await api.get("/v1/user/getMySubUsers?subUsername=");
        dispatch(setSubUser(subUserRes?.data?.data));

        // ✅ Fetch bag
        try {
          const bagRes = await api.get('/v1/myBag/getMyBag');
          const bagPayload = bagRes?.data?.data ?? bagRes?.data ?? null;
          if (bagPayload) dispatch(setBag(bagPayload));
        } catch (e) {
          console.warn('Failed to fetch bag', e);
        }

        // ✅ Fetch wallet balance
        try {
          const uid = user?.userId || user?.id || 0;
          const balRes = await api.get(`/v1/wallet/balance?userId=${uid}`);
          const balance = balRes?.data?.data ?? balRes?.data ?? 0;
          dispatch(setBalance(balance));
        } catch (e) {
          console.warn('Failed to fetch wallet balance', e);
        }

        // ✅ Optional: fetch kundali details if payload available in localStorage
        try {
          const kundaliPayloadRaw = localStorage.getItem('kundaliPayload');
          if (kundaliPayloadRaw) {
            const kundaliPayload = JSON.parse(kundaliPayloadRaw);
            const kundaliRes = await api.post('/v1/kundaliCharts/getKundaliDetails', kundaliPayload);
            const kundaliData = kundaliRes?.data?.data ?? kundaliRes?.data ?? null;
            if (kundaliData) dispatch(setKundali(kundaliData));

            // also fetch varg kundali if desired
            const vargRes = await api.post('/v1/chart/getVargKundali', kundaliPayload);
            const vargData = vargRes?.data?.data ?? vargRes?.data ?? null;
            if (vargData) dispatch(setVargKundali(vargData));
          }
        } catch (e) {
          console.warn('Failed to fetch kundali/varg', e);
        }
        toast.success("OTP Verified Successfully!");

        if (!user.name || user.name.trim() === "") {
          navigate("/username");
        } else {
          navigate("/");
        }
      } else {
        toast.error(
          res.data.response.responseMessage || "Invalid OTP"
        );
      }
    } catch (err) {
      console.error(err);
      toast.error("OTP verification failed. Try again.");
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
            <ToastContainer/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOTPPage;