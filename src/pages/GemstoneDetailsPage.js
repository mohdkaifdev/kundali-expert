import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

export default function GemstoneDetailsPage() {
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [gemstoneDetails, setGemstoneDetails] = useState({});
  const [gemstoneCatName, setCatGemstoneName] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();
  const SubCategoryId = localStorage.getItem("selectedGemSubCategoryId");
  const categoryName = localStorage.getItem("selectedGemCategoryName");

  const BASE_URL = "https://api.kundaliexpert.com/kmAstroapp/api/v1/";

  useEffect(() => {
    if (categoryName) {
      setCatGemstoneName(categoryName);
    }

    if (!SubCategoryId) {
      toast.error("No sub category selected");
      navigate("/#gemstones");
      return;
    }

    const fetchGemstonesDetails = async () => {
      try {
        setLoading(true);

        const response = await api.get(
          `/v1/gemstone/getGemstoneById?gemstoneId=${SubCategoryId}`,
        );

        const data = response.data?.data;

        if (data) {
          setGemstoneDetails(data);

          // Image handling from API
          let imageArray = [];

          if (data.imageLink && data.imageLink.length > 0) {
            imageArray = data.imageLink.map((img) => `${BASE_URL}${img}`);
          } else if (data.image) {
            imageArray = [`${BASE_URL}${data.image}`];
          }

          setImages(imageArray);
          setSelectedImage(imageArray[0] || "");
        }
      } catch (error) {
        toast.error("Failed to load gemstones");
      } finally {
        setLoading(false);
      }
    };

    fetchGemstonesDetails();
  }, [SubCategoryId, categoryName, navigate]);

  return (
    <section className="gamestoneDetail">
      <div className="container">
        <div className="gemstone-details-container">
          <div className="d-flex justify-content-center">
            <h1
              style={{
                color: "rgb(174, 40, 93)",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderBottom: "3px solid rgb(174, 40, 93)",
                paddingBottom: "10px",
                maxWidth: "250px",
                width: "80%",
                textAlign: "center",
              }}
            >
              {gemstoneCatName}
            </h1>
          </div>

          <div className="content-section container shadow-sm border p-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="image-gallery d-flex flex-column flex-md-row">
                  <div className="thumbnail-list">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="Gem Thumbnail"
                        className={`thumbnail-img ${
                          selectedImage === img ? "active" : ""
                        }`}
                        onClick={() => setSelectedImage(img)}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </div>

                  <div className="main-image-wrapper">
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Selected Gemstone"
                        className="main-image"
                      />
                    )}
                  </div>
                </div>

                <div className="details-section mt-4">
                  <h2 className="gemstone-name">
                    {gemstoneDetails.gemstoneName}
                  </h2>

                  <p className="gemstone-price">
                    <strong>Start From </strong>
                    <span className="price-text">
                      ₹ {gemstoneDetails.price}
                    </span>
                  </p>

                  {gemstoneDetails.discription && (
                    <>
                      <h3 className="description-title mt-4">Description</h3>
                      <p className="gemstone-purpose mt-3">
                        {gemstoneDetails.discription}
                      </p>
                    </>
                  )}

                  {gemstoneDetails.purpose && (
                    <p className="gemstone-purpose mt-3">
                      <strong>Purpose:</strong> {gemstoneDetails.purpose}
                    </p>
                  )}

                  {gemstoneDetails.howToWear && (
                    <p className="how-to-wear mt-4">
                      <strong>How To Wear:</strong> {gemstoneDetails.howToWear}
                    </p>
                  )}

                  <div className="buttons-container mt-4">
                    <button className="buy-now-btn">Buy Now</button>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
