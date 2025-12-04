import React from "react";
import FbImg from "../../assets/images/fb_icon.png";
const LoginWithFacebook = () => {
    return(
        <>
        <a href="#" className="site_btn">Sign Up with Facebook <img src={FbImg} alt="icon" className="img-fluid"/></a>
        </>
    );
}
export default LoginWithFacebook;