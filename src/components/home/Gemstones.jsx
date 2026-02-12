import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Gemstones() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gemstones, setGemstones] = useState([]);
  const [showAll, setShowAll] = useState(false); // NEW STATE: show all ya sirf 4

  const fetchGemstones = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(
        "v2/gemstoneCategory/getGemstoneCategories",
      );
      const data = response.data?.data || [];
      console.log("Gemstones API response:", data);
      setGemstones(data);
    } catch (err) {
      console.error("Gemstones API error:", err);
      setError("Failed to load gemstones. Please try again later.");
      toast.error("Failed to load gemstones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGemstones();
  }, []);

  // Sirf 4 ya sab show karne ke liye
  const displayedGemstones = showAll ? gemstones : gemstones.slice(0, 4);

  return (
    <section id="shop-section">
      <div className="gemstones_section space_sec">
        <div className="container">
          <div className="heading_sec text-center" >
            <h2 className="purple_clr">Gemstones</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading gemstones...</p>
            </div>
          ) : error ? (
            <div className="text-center py-5 text-danger">
              <h5>{error}</h5>
              <button className="btn btn-primary mt-3" onClick={fetchGemstones}>
                Retry
              </button>
            </div>
          ) : displayedGemstones.length === 0 ? (
            <div className="text-center py-5">
              <h5>No gemstones available right now</h5>
              <p>Check back later or explore other categories</p>
            </div>
          ) : (
            <>
              <div className="row">
                {displayedGemstones.map((gem) => (
                  <div
                    key={gem.id || gem.gemStoneTypeName || gem.name}
                    className="col-lg-3 col-md-6 mb-4"
                  >
                    <div className="astrologers_box">
                      <Link to="">
                        <img
                          src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${gem.imageUrl}`}
                          alt={gem.gemStoneTypeName || gem.name || "Gemstone"}
                          className="w-100"
                        />
                      </Link>
                      <div className="astrologers_caption">
                        <div className="star d-flex align-items-center mb-2">
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <h6 className="ms-1">
                            <span className="badge bg-success">4.9</span>
                          </h6>
                        </div>

                        <h6>
                          {gem.gemStoneTypeName || gem.name || "Gemstone"}
                        </h6>

                        <h5 className="del_sec">
                          <del>
                            ₹{gem.originalPrice || gem.price * 1.5 || 82775}
                          </del>{" "}
                          ₹{gem.price || 62775}
                        </h5>

                        {gem.weightRange && (
                          <p className="mb-1">
                            <small>Weight: {gem.weightRange}</small>
                          </p>
                        )}
                        {gem.color && (
                          <p className="mb-1">
                            <small>Color: {gem.color}</small>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More / Show Less Button */}
              {gemstones.length > 4 && (
                <div className="text-center mt-5">
                  <button
                    className="site_btn purple_bg"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
