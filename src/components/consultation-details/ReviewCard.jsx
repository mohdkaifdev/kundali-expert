import React from 'react'
import userReviewIimage from "../../assets/images/user-review-image.png"

const ReviewCard = React.memo(({ review }) => {

  
  return (
    <div className="review_box d-flex align-items-center justify-content-between flex-wrap">
      <div className="review_box_inner d-flex align-items-center">
        <span>
          <img src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${review?.profileUrl}`} alt={review.userName} className="img-fluid w-100" />
        </span>
        <div className="review_box_name ms-md-4 ms-2">
          <h6 className="mrn_clr">{review.userName}</h6>
          <p className="gray_clr">
            <span>
              {[...Array(review.ratings)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </span>{' '}
            {review?.reviewDate}
          </p>
        </div>
      </div>
      <div className="dots_review">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Edit Review</a></li>
            <li><a className="dropdown-item" href="#">Delete Review</a></li>
          </ul>
        </div>
      </div>
      <div className="review_cont w-100 mt-4">
        <p className="gray_clr">{review?.comment}</p>
      </div>
    </div>
  )
})

export default ReviewCard