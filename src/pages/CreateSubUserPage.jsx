import React from "react";
import { Helmet } from "react-helmet";
import CreateSubUserPage from "../components/profile/CreateSubUserPage";
const CreateSubUser = () => {
    return(
        <>
            <Helmet>
                <title>Sub Users - Manage Profiles | Kundali Expert</title>
                <meta name="description" content="View, search, and create sub-user profiles for astrology readings." />
            </Helmet>
            <CreateSubUserPage/>
        </>
    );
}
export default CreateSubUser;