import { Link } from "react-router-dom";

export default function GemstoneSublist({ gemstones = [] }) {
  return (
    <>
      {gemstones.map((gem) => {
        const sellingPrice = gem.price;
        const originalPrice = sellingPrice + 20000;
        const discountPercent = Math.round((20000 / originalPrice) * 100);

        return (
          <div key={gem.id} className="col-lg-3 col-md-6">
            <div className="astrologers_box">
              <Link
                to={`/gemstone-details`}
                onClick={() => {
                  localStorage.setItem("selectedGemSubCategoryId", gem.id);
                  localStorage.setItem(
                    "selectedGemSubCategoryName",
                    gem.gemstoneName,
                  );
                }}
              >
                <img
                  src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${gem.image}`}
                  alt={gem.gemstoneName}
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

                <h6>{gem.gemstoneName}</h6>

                <h5 className="del_sec">
                  <del>₹{originalPrice.toLocaleString("en-IN")}</del> ₹
                  {sellingPrice.toLocaleString("en-IN")}
                </h5>

                <span className="badge bg-danger">{discountPercent}% OFF</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
