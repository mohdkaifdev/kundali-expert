import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; 

const OTPHeader = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const phone = state?.phone ?? "";

    return(
        <>
            <div class="heading_sec text-center">
                <h2 class="mrn_clr">Verify OTP</h2>
                <p class="gray_clr">We send you a 4-digit verification code on your mobile number <b>+{ phone}</b> <a href="#" class="edit_link" onClick={()=> navigate(-1)}>Edit</a></p>
            </div>
        </>
    );
}
export default OTPHeader;