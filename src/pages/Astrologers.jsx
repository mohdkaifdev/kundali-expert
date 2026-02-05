import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CallAstrologers from "../components/our-astrologers/CallAstrologers";
import ChatAstrologers from "../components/our-astrologers/ChatAstrologers";
import api from "../services/api";

export default function Astrologers() {
  const [astrologers, setAstrologers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCall, setIsCall] = useState(true);

  const fetchAstrologers = async () => {
    try {
      const response = await api.get("v2/astrologers/list");
      const data = response.data.data;
      setAstrologers(data || []);
      console.log("Astrologers List", data);
    } catch (error) {
      console.error("Astrologer API error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAstrologers();
  }, []);
  return (
    <>
      <Helmet>
        <title>Kundali Expert</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <section>
        <div className="consultation_list_section astrologers_main_section space_sec b_space_top">
          <div className="container">
            <div className="heading_sec">
              <h3 className="mrn_clr mb-0">Our Astrologers</h3>
              <div className="switches-container">
                <div className="d-flex justify-content-start mb-5 mt-4">
                  <div className="toggle-button">
                    <button
                      className={`toggle-option ${isCall ? "active" : ""}`}
                      onClick={() => setIsCall(true)}
                    >
                      Call With Astrologer
                    </button>
                    <button
                      className={`toggle-option ${!isCall ? "active" : ""}`}
                      onClick={() => setIsCall(false)}
                    >
                      Chat With Astrologer
                    </button>
                    <div
                      className={`toggle-indicator ${isCall ? "left" : "right"}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${isCall ? "active" : ""} switchMonthly`}>
              {isCall && <CallAstrologers astrologers={astrologers} />}
            </div>
            <div className={`row ${!isCall ? "active" : ""} switchYearly`}>
              {!isCall && <ChatAstrologers astrologers={astrologers} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
