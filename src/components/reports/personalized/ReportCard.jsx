import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
const ReportCard = React.memo(({ title, link, iconlink, free }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState("login"); // 'login' | 'purchaseOptions' | 'buyDetails'
  const navigate = useNavigate();

  const handleClick = (e) => {
    // If not authenticated - show login modal
    if (!isAuthenticated) {
      e.preventDefault(); // stop navigation
      setModalView("login");
      setShowModal(true);
      return;
    }

    // If authenticated and this is a paid service, show purchase/download options
    if (isAuthenticated && !free) {
      e.preventDefault();
      setModalView("purchaseOptions");
      setShowModal(true);
      return;
    }

    // otherwise allow navigation (free services)
  };

  const handleClose = () => setShowModal(false);

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate("/login");
  };

  const handleDownload = () => {
    // navigate to the PDF show page (link expected to point to pdf route)
    setShowModal(false);
    navigate(link || "/pdfshow");
  };

  const handleBuyNow = () => {
    setModalView("buyDetails");
  };

  const handlePayNow = () => {
    // Placeholder: navigate to a payment/checkout route. Replace with PaymentButton if available.
    setShowModal(false);
    navigate(`/checkout?product=${encodeURIComponent(title)}&amount=1298`);
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
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalView === "login" && "Login Required"}
                  {modalView === "purchaseOptions" && "Report Options"}
                  {modalView === "buyDetails" && "Buy Report"}
                </h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>

              <div className="modal-body">
                {modalView === "login" && (
                  <p>You need to login to access this service.</p>
                )}

                {modalView === "purchaseOptions" && (
                  <div className="d-flex flex-column gap-3">
                    <p>Select an option for the report:</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-primary" onClick={handleDownload}>
                        Download Report
                      </button>
                      <button className="btn btn-primary" onClick={handleBuyNow}>
                        Buy Report
                      </button>
                    </div>
                  </div>
                )}

                {modalView === "buyDetails" && (
                  <div>
                    <p>
                      Purchase one comprehensive astrological report for Rs.1298 and receive nine additional reports absolutely
                      free! Discover insights into your future, love life, career, and more.
                    </p>
                    <p className="text-muted small">
                      Note: Reports are available in English and Hindi. Change your preferred language through settings.
                    </p>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>

                {modalView === "login" && (
                  <button type="button" className="btn btn-primary" onClick={handleLoginRedirect}>
                    Login Now
                  </button>
                )}

                {modalView === "purchaseOptions" && (
                  <></>
                )}

                {modalView === "buyDetails" && (
                  <button type="button" className="btn btn-success" onClick={handlePayNow}>
                    Pay Now
                  </button>
                )}
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
