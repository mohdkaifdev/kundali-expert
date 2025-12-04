import React from "react";
import Micon from "../../assets/images/mob_icon.png";
import { Link } from "react-router-dom";
const LoginWithMobile = () => {
    return(
        <>
            <Link to="/signin" className="site_btn">Sign Up with Mobile Number <img src={Micon} alt="icon" className="img-fluid mob_icon"/></Link>
        </>
    );
}
export default LoginWithMobile;