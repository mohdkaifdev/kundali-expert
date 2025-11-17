import React from "react";
import SavedProfilePageCard from "./SavedProfilePageCard";
const SavedProfilePage = () => {
    return(
        <>
            <section>
                <div className="course_detail_section learn_section banner_space light_bg">
                    <div className="container">
                        <div className="banner_heading d-flex align-items-center justify-content-between mb-4 pb-lg-3">
                            <h2>Get Started With Astrology</h2>
                        </div>
                        <div className="learn_main_block">
                            <div className="dropdown">
                                <div className="apply-section mt-3">
                                    <input type="text" placeholder="Search by name..." className="p-3"/>
                                    <a href="createsubuser.php" className="site_btn p-3 px-5">Create Sub User</a>
                                </div>
                                <ul className="dropdown-menu border-0 position-relative" data-popper-placement="bottom-end">
                                    <SavedProfilePageCard/>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SavedProfilePage;