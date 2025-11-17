import React from 'react'
import ReviewCard from './ReviewCard'
import consultationDetail from "../../data/consultationDetails";

const ReviewSection = () => {
  const { reviews, ratingDistribution, totalReviews } = consultationDetail

  return (
    <div className="cd_tab_content review_block">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-2 col-2">
          <ul className="review_rating">
            {[5, 4, 3, 2, 1].map((star) => (
              <li key={star}>
                {star} <i className="fa-solid fa-star"></i>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-xl-8 col-md-7 col-10">
          <div className="progress_bar d-flex flex-wrap h-100">
            {ratingDistribution.map((item, i) => (
              <div
                key={i}
                className="progress w-100"
                style={{ height: '25px', marginBottom: '15px' }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${item.percentage}%` }}
                  aria-valuenow={item.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {item.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-2 col-md-3 col-12">
          <div className="rating_review text-center">
            <h5>
              5.0{' '}
              <span>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </span>
            </h5>
            <p className="gray_clr">{totalReviews} Reviews</p>
          </div>
          <div className="banner_btn text-center mt-4">
            <a href="#" className="site_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <b>
                <i className="fa-solid fa-plus pe-1"></i>
              </b>{' '}
              ADD REVIEW
            </a>
          </div>
        </div>
        <div className="col-12">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div className="banner_btn">
        <a href="#" className="site_btn">CONSULT NOW</a>
      </div>
    </div>
  )
}

export default ReviewSection