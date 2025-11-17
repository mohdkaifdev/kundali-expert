// src/components/shared/ReviewModal.jsx
import React, { useState } from 'react'

const ReviewModal = () => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleStarClick = (value) => {
    setRating(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Review Submitted:', { rating, comment })

    const modalElement = document.getElementById('exampleModal')
    const bsModal = window.bootstrap.Modal.getInstance(modalElement)
    if (bsModal) bsModal.hide()
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h4 className="modal-title mrn_clr mb-0" id="exampleModalLabel">
              Edit Review
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="modal_content">
              <h5 className="gray_clr">Rating</h5>
              <p className="start_click">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`star ${rating >= star ? 'active' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="fa-solid fa-star"></i>
                  </span>
                ))}
              </p>

              {/* Rating Display */}
              {rating > 0 && (
                <p className="output mt-2 gray_clr">
                  Rating is: <strong>{rating}/5</strong>
                </p>
              )}

              <h5 className="gray_clr mt-4 mb-3">Review Comment</h5>
              <textarea
                className="form-control w-100"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review here..."
              />
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary site_btn w-100"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewModal