import React from "react";
import Gicon from "../../assets/images/google_icon.png";
const LoginWithGmail = () => {
    return(
        <>
            <a href="#" className="site_btn">Sign Up with Google <img src={Gicon} alt="icon" className="img-fluid"/></a>
        </>
    );
}
export default LoginWithGmail;