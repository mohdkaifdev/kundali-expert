import React from "react";
import TimeSelector from "./profile-setup/TimeSelector";
import TimeBackButton from "./profile-setup/TimeBackButton";
import TimeNextButton from "./profile-setup/TimeNextButton";

const UserTOBPage = () => {
    return(
        <>
            <section>
                <div class="login_section b_space_top">
                    <div class="container">
                        <div class="heading_sec text-center">
                            <h2 class="mrn_clr">What is your time of birth ?</h2>
                        </div>
                        <div class="login_block text-center pt-lg-2">
                            <h5 class="gray_clr mb-4 pb-lg-2">
                            {new Date().toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                            })}
                            </h5>
                            <form>
                                <div class="form_group w-100">
                                    <div class="birth_btns d-flex gap-2">
                                        <TimeSelector />
                                    </div>
                                </div>
                                <div class="form_btnss d-flex gap-md-3 gap-2 mt-4">
                                   <TimeBackButton />
                                   <TimeNextButton nextPage="/user-place" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UserTOBPage;