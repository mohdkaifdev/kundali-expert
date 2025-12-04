import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4} from "uuid";
const SigninPage = () => {

    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isValidPhone = (value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >=8 && digits.length <= 15;
    }
    
    const sendOtp = async (fullPhone) => {
        console.log("Mobile:", fullPhone);
        setLoading(true);
        setError("");
        try {
           const deviceId = uuidv4();

            // YE CORRECT FORMAT BANAYENGE
           const mobile = fullPhone.replace(/\D/g, "").slice(-10);
           const countryCode = "+" + fullPhone.split(mobile)[0]; 
           const fullPhoneWithCountry = countryCode + mobile; // 918601971663

            const payload = {
                formData: {
                    mobile: fullPhoneWithCountry,     // YE "phone" hona chahiye, "mobile" nahi
                    deviceId: deviceId,
                    countryCode: countryCode         // +91 → 91 (plus hatana)
                }
            };

            console.log("Sending Payload:", payload); // Check kar lena
            
            const res = await fetch("https://api.kundaliexpert.com/kmAstroapp/api/v1/otp/sendOTP", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if(!res.ok) throw new Error("Failed to send OTP");
            // store response data in data variable
            const data = await res.json();

            console.log("OTP Send:", data);

            if(data.response?.type == 'SUCCESS')
            {
                localStorage.setItem('mobile',mobile);
                localStorage.setItem('deviceId',deviceId);
                localStorage.setItem('countryCode',countryCode);

                navigate('/verify',{
                    state: {
                        phone: fullPhone,
                        mobile: mobile,
                        deviceId: deviceId,
                    }
                });
            }
            else 
            {
                throw new Error(data.errors?.userMessage || "Failed to send OTP");
            }
            
            
        } catch (err) {
            console.log(err);
            setError("Failed to send OTP. Please try again.");
            
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = (e) =>{
    e.preventDefault();
       if(!phone)
       {
        setError("Please enter phone number");
        return;
       }
       if(!isValidPhone(phone))
       {
        setError("Please enter a valid phone number.");
        return;
       }
        setError("");
        sendOtp(phone);
    }
    return(
        <>
            <section>
                <div className="login_section b_space_top">
                    <div className="container">
                        <div className="heading_sec text-center">
                            <h2 className="mrn_clr">Login</h2>
                            <p className="gray_clr">Enter your phone number, and we will send you the 4-digit verification code.</p>
                        </div>
                        <div className="login_block text-center pt-lg-2">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3" style={{maxWidth: 420, margin: "0, auto"}}>
                                    <PhoneInput
                                        country={"in"}              // default country
                                        value={phone}
                                        onChange={(value) => setPhone(value)}
                                        inputProps={{
                                        name: "mobile_code",
                                        id: "mobile_code",
                                        required: true,
                                        }}
                                        inputStyle={{ width: "100%" }}
                                        enableSearch={true}
                                        disableCountryCode={false}
                                        countryCodeEditable={false}
                                    />
                                    {error && <small style={{ color: "red" }}>{error}</small>}
                                </div>
                                <div className="login_btn">
                                    <button type="submit" className="site_btn purple_bg w-100">
                                       {loading ? 'Sending...':'SEND OTP'}
                                    </button>
                                </div>
                            </form>
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
export default SigninPage;