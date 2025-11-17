import React from "react";
import chatLogo from "../../assets/images/chat_logo.webp";
import UserPageChatModal from "../UserPageChatModal";
const ProfilePage = () => {
    return(
        <>
            <section>
                <div class="course_detail_section learn_section banner_space light_bg">
                    <div class="container">
                        <div class="banner_heading text-center">
                            <h2 class="mrn_clr">Profile</h2>
                        </div>
                        <div class="modal d-block position-relative mt-md-0 mt-3">
                            <div class="modal-dialog mb-0">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title mrn_clr mb-0 d-flex align-items-center" id="exampleModalLabel">
                                            <img src={chatLogo} alt="logo" class="img-fluid"/>
                                            <div class="title_modal ps-2">
                                                <span>Prateek</span>
                                                <p>loremipsum@gmail.com</p>
                                            </div>
                                        </h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal_content">
                                            <form id="addressForm1">
                                                <div class="form_group w-100">
                                                    <label for="">Name *</label>
                                                    <input type="text" placeholder="Enter your name" class="form-control w-100"
                                                        required />
                                                </div>
                                                <div class="form_group w-100">
                                                    <label for="">Gender *</label>
                                                    <div class="birth_btns d-flex gap-2">
                                                        <button type="button" class="site_btn">♂ Male</button>
                                                        <button type="button" class="site_btn">♀ Female</button>
                                                        <button type="button" class="site_btn">⚧ Other</button>
                                                    </div>
                                                </div>
                                                <div class="form_group w-100">
                                                    <label for="">Date of Birth *</label>
                                                    <input type="date" class="form-control w-100" required />
                                                </div>
                                                <div class="form_group w-100">
                                                    <label for="">Time of Birth *</label>
                                                    <input type="time" class="form-control w-100" required />
                                                </div>
                                                <div class="form_group w-100">
                                                    <label for="">Email *</label>
                                                    <input type="text" placeholder="Enter your email" class="form-control w-100"
                                                        required />
                                                </div>
                                                <div class="form_group w-100">
                                                    <label for="">Enter Birth Place *</label>
                                                    <input type="text" placeholder="Jaipur Road, Ganpati Nagar, Jaipur, Rajasthan" class="form-control w-100"
                                                        required />
                                                </div>
                                                <div class="form_btnss d-flex gap-md-3 gap-2 mt-4">
                                                    <button type="button" class="btn btn-primary site_btn" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                    <button type="button" class="btn btn-primary site_btn"
                                                        data-bs-toggle="modal" data-bs-target="#chatModal">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <UserPageChatModal/>
        </>
    );
}
export default ProfilePage;