import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import api from "../services/api";

const TransitTimeline = () => {
  const { id } = useParams();

  const [pulicationdata, setpoojadata] = useState(null);
  const [pulicationdata2, setpoojadata2] = useState(null);
  const [activeType, setActiveType] = useState("nakshatra");

  const getlist = async () => {
    try {
      const [res, res2] = await Promise.all([
        api.get("/planetTransit/next-six-months"),
        api.get("/planetTransit/next-six-months-Nakshtr"),
      ]);

      console.log("API RESPONSE:", res2);

      setpoojadata(res.data?.data || res.data);
      setpoojadata2(res2.data?.data || res2.data);
    } catch (error) {
      console.error("API ERROR:", error);
    }
  };

  useEffect(() => {
    getlist();
  }, []);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/");

    const date = new Date(`${year}-${month}-${day}`);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Transit Time | Kundali Expert</title>
        <meta name="description" content="Transit Time" />
        <meta property="og:title" content="Transit Time" />
        <meta property="og:image" content="Transit Time" />
      </Helmet>

      <section className="timeline-pge">
        <div className="timeline-wrapper">
          {/* Toggle */}
          <div className="timeline-toggle">
            <button
              className={`toggle-btn ${
                activeType === "nakshatra" ? "active" : ""
              }`}
              onClick={() => setActiveType("nakshatra")}
            >
              Show Nakshatras
            </button>

            <button
              className={`toggle-btn ${
                activeType === "transit" ? "active" : ""
              }`}
              onClick={() => setActiveType("transit")}
            >
              Show Transits
            </button>

            <span
              className={`toggle-indicator ${
                activeType === "transit" ? "right" : "left"
              }`}
            />
          </div>

          {/* Today Label */}
          <div className="today-timeline">
            <div className="footer tody">Today</div>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {/* Nakshatra Items */}
            {activeType === "nakshatra" && (
              <>
                {pulicationdata2?.map((item, i) => {
                  return (
                    <div
                      className={`timeline-item ${i % 2 === 0 ? "left" : "right"} nakshatra`}
                    >
                      <div className="dot">
                        <div className="dot-normal" />
                      </div>
                      <div className="content">
                        <small>{formatDate(item?.startDate)}</small>
                        <p>
                          {item?.planetName} Turns direct in{" "}
                          {item?.nakshtraName}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* Transit Items */}
            {activeType === "transit" && (
              <>
                {pulicationdata?.map((item, i) => {
                  return (
                    <div
                      className={`timeline-item ${i % 2 === 0 ? "left" : "right"} nakshatra`}
                    >
                      <div className="dot">
                        <div className="dot-normal" />
                      </div>
                      <div className="content">
                        <small>{formatDate(item?.startDate)}</small>
                        <p>
                          {item?.planetName} Turns direct in {item?.rashiName}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          <div className="today-timeline twnty-thrty">
            <div className="footer tody">
              {pulicationdata2?.length > 0 &&
                formatDate(
                  pulicationdata2[pulicationdata2.length - 1]?.startDate,
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransitTimeline;
