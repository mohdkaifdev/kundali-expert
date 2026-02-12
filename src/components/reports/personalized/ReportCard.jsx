import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
const ReportCard = React.memo(({ title, link, iconlink, free }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault(); // stop navigation
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <div className="banner_col">
        <Link to={link} onClick={handleClick}>
          <div className="banner_box position-relative">
            <span>
              <img src={iconlink} alt="icon" className="img-fluid sec_icon" />
            </span>
            <div className="banner_box_inner">
              <h5>{title}</h5>
            </div>
            <div className="offer_box offer_box_light d-inline-flex align-items-center">
              <p>{free ? "FREE SERVICE" : "Paid SERVICE"}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Required</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              <div className="modal-body">
                <p>You need to login to access this service.</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLoginRedirect}
                >
                  Login Now
                </button>
              </div>
            </div>
          </div>

          {/* Backdrop */}
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </>
  );
});

export default ReportCard;
