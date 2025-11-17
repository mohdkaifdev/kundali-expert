import React from "react";
import biImg1 from "../../assets/images/bi_img1.png";
const SavedProfilePageCard = () => {
    return(
        <>
            <div className="review_box mt-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="review_box_inner d-flex align-items-center">
                        <span><img src={biImg1} alt="img" className="img-fluid w-100"/></span>
                        <div className="review_box_name ms-md-4 ms-2">
                            <h5 className="mrn_clr">Prateek</h5>
                            <div className="review_cont w-100">
                                <p className="gray_clr">Date: 12/11/2025</p>
                                <p className="gray_clr">Time: 14:28:00</p>
                                <p className="gray_clr">Place: Jaipur Road, Ganpati Nagar, Jaipur, Rajasthan</p>
                            </div>
                        </div>
                    </div>
                    <div className="dots_review d-flex align-items-center justify-content-between gap-4">
                        <div className="like_buttons edit_btsss">
                            <a href="profile.php"><i className="fa-solid fa-edit"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default SavedProfilePageCard;