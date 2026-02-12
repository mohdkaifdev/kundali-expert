import callImage from "../../assets/images/call_icon_white.png";
import { Link } from "react-router-dom";
export default function CallAstrologers({ astrologers }) {
  if (!astrologers?.length) {
    return <p>No astrologers available</p>;
  }
  return (
    <>
      {astrologers.map((astro) => {
        const imageUrl = astro.profile?.[0]
          ? `https://api.kundaliexpert.com/kmAstroapp/api/v1/${astro.profile[0]}`
          : "/default-astro.png";

        return (
          <div className="col-lg-3 col-md-6">
            <div className="astrologers_box pb-0 mb-3">
              <Link to="#">
                <img
                  src={imageUrl}
                  alt={astro.astrologerName}
                  className="w-100"
                />
              </Link>
              <div className="astrologers_caption">
                <h6>{astro.astrologerName}</h6>
                <div className="star d-flex align-items-center">
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
                <div className="exp">
                  <p>
                    Exp. : {astro.experience} Years{" "}
                    <span className="d-block">
                      {astro.languages?.map((l) => l.name).join(", ")}
                    </span>
                  </p>
                </div>
                <p className="expertise">
                  <b>Expertise</b>{" "}
                  {astro.specializations?.map((s) => s.name).join(", ")}
                </p>
                <div className="astrologers_btn mt-3">
                  <Link to="#" className="site_btn">
                    <img src={callImage} alt="icon" className="img-fluid" />{" "}
                    CALL NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
