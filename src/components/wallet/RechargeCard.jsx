import React from "react";

const RechargeCard = ({pack}) => {
    return(
        <>
            <div className="banner_col">
                <a href="#">
                    <div className="banner_box position-relative">
                        <div className="banner_box_inner d-block text-center w-100 ms-0">
                            <h5>₹ {pack.amount.toFixed(2)}</h5>
                            <h4 className="mt-3">Pay Now</h4>
                        </div>
                        <div className="offer_box offer_box_light d-inline-flex align-items-center">
                            <p>{pack.offer}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
export default RechargeCard;