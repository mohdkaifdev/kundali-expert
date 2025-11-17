import React from "react";
import chatLogo from "../assets/images/chat_logo.webp";
import backgroundchat from "../assets/images/backgroundchat.webp";
const UserPageChatModal = () => {
    return(
        <>
            <div className="modal fade" id="chatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title mrn_clr mb-0" id="exampleModalLabel">
                        <img src={chatLogo} alt="logo" className="img-fluid"/> Chat with Anand Vats</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-0">
                    <div className="modal_content">
                        <div className="modal_bg">
                            <img src={backgroundchat} alt="img" className="w-100" />
                        </div>
                        <div className="apply-section m-2 p-3">
                            <input type="text" placeholder="Enter coupon code"/>
                            <button className="site_btn">Apply Coupon</button>
                    </div>
                    <div className="remain_time d-flex justify-content-between align-items-center p-3 pt-0">
                        <p className="gray_clr me-lg-3">Remaining Time: 2:00</p>
                        <button type="button" className="btn btn-primary site_btn w-100" data-bs-toggle="modal" data-bs-target="#chatModal">Proceed</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default UserPageChatModal;