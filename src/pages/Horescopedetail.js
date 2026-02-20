import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../services/api";
import "./Horescopedetail.css";

import horoscopeIcon1 from "../assets/images/horoscope_icon1.png";
import horoscopeIcon2 from "../assets/images/horoscope_icon2.png";
import horoscopeIcon3 from "../assets/images/horoscope_icon3.png";
import horoscopeIcon4 from "../assets/images/horoscope_icon4.png";
import horoscopeIcon5 from "../assets/images/horoscope_icon5.png";
import horoscopeIcon6 from "../assets/images/horoscope_icon6.png";
import horoscopeIcon7 from "../assets/images/horoscope_icon7.png";
import horoscopeIcon8 from "../assets/images/horoscope_icon8.png";
import horoscopeIcon9 from "../assets/images/horoscope_icon9.png";
import horoscopeIcon10 from "../assets/images/horoscope_icon10.png";
import horoscopeIcon11 from "../assets/images/horoscope_icon11.png";
import horoscopeIcon12 from "../assets/images/horoscope_icon12.png";

const HOROSCOPE_TYPE_MAP = {
  daily: 1,
  weekly: 2,
  monthly: 3,
};

const Horescopedetsil = () => {
  const horoscopeList = [
    { id: 1, name: "aries", image: horoscopeIcon1, color: "clr1" },
    { id: 2, name: "taurus", image: horoscopeIcon2, color: "clr2" },
    { id: 3, name: "gemini", image: horoscopeIcon3, color: "clr3" },
    { id: 4, name: "cancer", image: horoscopeIcon4, color: "clr4" },
    { id: 5, name: "leo", image: horoscopeIcon5, color: "clr5" },
    { id: 6, name: "virgo", image: horoscopeIcon6, color: "clr6" },
    { id: 7, name: "libra", image: horoscopeIcon7, color: "clr7" },
    { id: 8, name: "scorpio", image: horoscopeIcon8, color: "clr8" },
    { id: 9, name: "sagittarius", image: horoscopeIcon9, color: "clr9" },
    { id: 10, name: "capricorn", image: horoscopeIcon10, color: "clr10" },
    { id: 11, name: "aquarius", image: horoscopeIcon11, color: "clr11" },
    { id: 12, name: "pisces", image: horoscopeIcon12, color: "clr12" },
  ];

  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user || {});
  const { selected: selectedSubuser } = useSelector((state) => state.subuser || {});
  const { kundali } = useSelector((state) => state.kundali || {});

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentRashi, setCurrentRashi] = useState(null);

  useEffect(() => {
    const typeKey = String(slug || "").toLowerCase();

    if (!HOROSCOPE_TYPE_MAP[typeKey]) {
      navigate("/404", { replace: true });
      return;
    }

    const horoscopeTypeId = HOROSCOPE_TYPE_MAP[typeKey];

    const rashiId = kundali?.ascendantRashiMaster?.id;
    const userId = user?.userId || user?.id;
    const subUserId = selectedSubuser?.subUserId || 0;

    if (!rashiId || !userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await api.get(
          `/v1/horoscope/getHoroscopeByRashiIdAndHorosopeType?rashiId=${rashiId}&horoscopeTypeId=${horoscopeTypeId}&userId=${userId}&subUserId=${subUserId}`
        );

        const responseData = res?.data?.data || res?.data;
        setData(responseData);

        // Find correct rashi image
        const foundRashi = horoscopeList.find(
          (h) =>
            h.name.toLowerCase() ===
            responseData?.rashi?.toLowerCase()
        );

        setCurrentRashi(foundRashi || null);

      } catch (err) {
        console.error("Horoscope error:", err);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [
    slug,
    kundali?.ascendantRashiMaster?.id,
    user?.userId,
    selectedSubuser?.subUserId
  ]);

  if (loading) return <div className="container py-5">Loading...</div>;
  if (error) return <div className="container py-5">{error}</div>;
  if (!data) return null;

  const sections = [
    { title: "Health", text: data.horoscopeDescriptionEnglishHealth },
    { title: "Wealth", text: data.horoscopeDescriptionEnglishWealth },
    { title: "Family", text: data.horoscopeDescriptionEnglishFamily },
    { title: "Occupation", text: data.horoscopeDescriptionEnglishOccupation },
    { title: "Study", text: data.horoscopeDescriptionEnglishStudy },
    { title: "Relationship", text: data.horoscopeDescriptionEnglishRelationship },
    { title: "Travelling", text: data.horoscopeDescriptionEnglishTravelling },
    { title: "Married Life", text: data.horoscopeDescriptionEnglishMarriedLife },
    { title: "Remedies", text: data.horoscopeDescriptionEnglishRemedies },
  ];

  return (
    <div className="horoscope-page consultation_list_section space_sec b_space_top">
      <Helmet>
        <title>{data.rashi} - {data.horoscopeType}</title>
      </Helmet>

      <div className="horoscope-card">
        <div className="horoscope-title">
          {data.horoscopeType || "Daily Report"}
        </div>

        <div className="horoscope-avatar">
          <img
            src={currentRashi?.image || horoscopeIcon2}
            alt={data.rashi}
          />
        </div>

        <div className="horoscope-name">
          {data.rashi}
        </div>

        <div className="horoscope-note">
          Note: Horoscope is based on ascendant
        </div>
      </div>

      <div className="horoscope-content">
        <div className="horoscope-top-row">
          <div className="lucky-color">
            <div style={{ fontWeight: 700 }}>Lucky Color:</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                className="color-dot"
                style={{ background: data.colorCode || "#ff6f61" }}
              ></span>
              <span>{data.color || data.colorHindi || ""}</span>
            </div>
          </div>

          <div className="lucky-number">
            Lucky Number: {data.luckyNumber}
          </div>
        </div>

        {sections.map((s, idx) =>
          s.text ? (
            <div className="report-item" key={idx}>
              <div className="title">{s.title}:</div>
              <div className="body">{s.text}</div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Horescopedetsil;