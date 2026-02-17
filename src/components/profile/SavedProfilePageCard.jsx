import React from "react";
import biImg1 from "../../assets/images/bi_img1.png";
import { Link } from "react-router-dom";
const SavedProfilePageCard = (prop) => {

    const data = prop?.data;
    console.log(data)
    return(
        <>
            {data?.map((d,i)=>{
                return(
                    <div className="review_box mt-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="review_box_inner d-flex align-items-center">
                        <span><img src={d?.userProfileImageLink} alt="img" className="img-fluid w-100"/></span>
                        <div className="review_box_name ms-md-4 ms-2">
                            <h5 className="mrn_clr">{d?.name}</h5>
                            <div className="review_cont w-100">
                                <p className="gray_clr">Date: {d?.birthDateAndTime}</p>
                                <p className="gray_clr">Time: {d?.birthTime}</p>
                                <p className="gray_clr">Place: {d?.birthPlace?.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className="dots_review d-flex align-items-center justify-content-between gap-4">
                        <div className="like_buttons edit_btsss">
                            <Link to={`/profile/${d?.subUserId}`}><i className="fa-solid fa-edit"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
        </>

    );
}
export default SavedProfilePageCard;