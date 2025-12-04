import React from "react";
import SigninPage from "../../components/auth/SigninPage";
import { Helmet } from "react-helmet";

const Sigin = () => {
    return(
        <>
            <Helmet>
                <title>Verify OTP | Kundali Expert</title>
            </Helmet>
            
            <SigninPage/>
        </>
    );
}
export default Sigin;