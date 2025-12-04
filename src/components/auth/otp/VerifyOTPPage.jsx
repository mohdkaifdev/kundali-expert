import React, { useState } from "react";
import OTPHeader from "./OTPHeader";
import OTPInputBoxes from "./OTPInputBoxes";
import OTPSubmitButton from "./OTPSubmitButton";
import OTPBottomLinks from "./OTPBottomLinks";
const VerifyOTPPage = () => {
    const [otpCode, setOtpCode] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(otpCode.length !== 4) return;
        
        alert("OTP Verified Successfully");
    }
    return(
        <>
            <section>
                <div class="login_section b_space_top">
                    <div class="container">
                        <OTPHeader/>
                        <div class="login_block text-center pt-lg-2">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group mb-4 d-flex justify-content-center">
                                   <OTPInputBoxes onComplete={setOtpCode}/>
                                </div>
                                <OTPSubmitButton loading={loading} isValid={otpCode.length==4}/>
                            </form>
                            <OTPBottomLinks/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default VerifyOTPPage;