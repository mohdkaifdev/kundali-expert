import React from "react";
import UserPageChatModal from "../UserPageChatModal";
import chatLogo from "../../assets/images/chat_logo.webp";
const CreateSubUserPage = () => {
    return(
        <>
            <section>
                <div className="course_detail_section learn_section banner_space light_bg">
                    <div className="container">
                        <div className="modal d-block position-relative mt-md-0 mt-3">
                            <div className="modal-dialog mb-0">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title mrn_clr mb-0 d-flex align-items-center" id="exampleModalLabel">
                                            <img src={chatLogo} alt="logo" className="img-fluid"/>
                                            <div className="title_modal ps-2">
                                                <span>Create User</span>
                                            </div>
                                        </h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal_content">
                                            <form id="addressForm1">
                                                <div className="form_group w-100">
                                                    <label for="">Name *</label>
                                                    <input type="text" placeholder="Enter your name" className="form-control w-100"
                                                        required />
                                                </div>
                                                <div className="form_group w-100">
                                                    <label for="">Gender *</label>
                                                    <div className="birth_btns d-flex gap-2">
                                                        <button type="button" className="site_btn">♂ Male</button>
                                                        <button type="button" className="site_btn">♀ Female</button>
                                                        <button type="button" className="site_btn">⚧ Other</button>
                                                    </div>
                                                </div>
                                                <div className="form_group w-100">
                                                    <label for="">Date of Birth *</label>
                                                    <input type="date" className="form-control w-100" required />
                                                </div>
                                                <div className="form_group w-100">
                                                    <label for="">Time of Birth *</label>
                                                    <input type="time" className="form-control w-100" required />
                                                </div>
                                                <div className="form_group w-100">
                                                    <label for="">Enter Birth Place *</label>
                                                    <input type="text" placeholder="Jaipur Road, Ganpati Nagar, Jaipur, Rajasthan" className="form-control w-100"
                                                        required />
                                                </div>
                                                <div className="form_btnss d-flex gap-md-3 gap-2 mt-4">
                                                    <button type="button" className="btn btn-primary site_btn"  data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                    <button type="button" className="btn btn-primary site_btn"
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
export default CreateSubUserPage;