import React, { useEffect, useState } from "react";
import kundaliIcon1 from "../../assets/images/h_kundali_icon1.png";
import kundaliIcon2 from "../../assets/images/h_kundali_icon2.png";
import kundaliIcon3 from "../../assets/images/h_kundali_icon3.png";
import api from "../../services/api";
import { useSelector, useDispatch } from "react-redux";
import { loadUserFromStorage } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const KundaliDetails = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [Panchang, setPanchang] = useState({});
  // Add more state for forms
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [formDataP, setFormDataP] = useState({
    place: "",
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    time: "",
    gender: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch places from API
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      const getPlaces = async () => {
        try {
          const res = await api.get("/place/searchPlace", {
            params: {
              initialLetters: query,
            },
          });

          setResults(res.data || []);
          setShowDropdown(true);
        } catch (error) {
          console.error("Place search failed", error);
          setResults([]);
        }
      };

      getPlaces();
    }, 500); // debounce time

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (place) => {
    setFormData({ ...formData, place: place });
    setQuery(place.name);
    setShowDropdown(false);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const kundaliData = {
      name: formData.name,
      dob: formData.dob,
      gender: formData.gender,
      placeobj: formData.place,
      hour: hour24,
      minute: minute,
      ampm: ampm,
    };

    const params = new URLSearchParams(formData).toString();
    navigate(`/kundali-result`, {
      state: {
        kundaliData,
      },
    });
  };
  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);


  const todaypanchang = async () => {
    const now = new Date();

    const formattedDateTime =
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0") +
      " " +
      String(now.getHours()).padStart(2, "0") +
      ":" +
      String(now.getMinutes()).padStart(2, "0") +
      ":" +
      String(now.getSeconds()).padStart(2, "0");
    const payload = {
      formData: {
        dateAndTime: formattedDateTime,
        placetName: user?.birthPlace?.name,
        placeLatitude: user?.birthPlace?.latitude,
        placeLongitude: user?.birthPlace?.longitudes,
        timezoneId: 0,
      },
    };
    const res = await api.post("/Panchang/today", payload);
    setPanchang(res?.data?.data);
  };

  useEffect(() => {
    todaypanchang();
  }, []);

  // time and date slect

  const [hour24, setHour24] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

  const hours24 = Array.from({ length: 24 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0"),
  );

  const handleHourChange = (value) => {
    setHour24(value);

    const hourNum = parseInt(value);

    if (hourNum > 12) {
      setAmpm("PM");
    } else {
      setAmpm("AM");
    }
  };

  const [stepGB, setStepGB] = useState(1);
  const [activeFormGB, setActiveFormGB] = useState("boy");

  const [boyDataGB, setBoyDataGB] = useState({
    nameGB: "",
    dateGB: "",
    hourGB: "",
    minuteGB: "",
    ampmGB: "AM",
    timeGB: "",
    placeGB: "",
  });

  const [brideDataGB, setBrideDataGB] = useState({
    nameGB: "",
    dateGB: "",
    hourGB: "",
    minuteGB: "",
    ampmGB: "AM",
    timeGB: "",
    placeGB: "",
  });

  const [queryGB, setQueryGB] = useState("");
  const [resultsGB, setResultsGB] = useState([]);

  // -------------------------
  // PLACE SEARCH
  // -------------------------

  useEffect(() => {
    const delayGB = setTimeout(() => {
      if (queryGB.length < 2) {
        setResultsGB([]);
        return;
      }

      const getPlacesGB = async () => {
        try {
          const res = await api.get("/place/searchPlace", {
            params: { initialLetters: queryGB },
          });
          setResultsGB(res.data || []);
        } catch {
          setResultsGB([]);
        }
      };

      getPlacesGB();
    }, 500);

    return () => clearTimeout(delayGB);
  }, [queryGB]);

  const handlePlaceSelectGB = (place) => {
    const updatedDataGB =
      activeFormGB === "boy"
        ? { ...boyDataGB, placeGB: place }
        : { ...brideDataGB, placeGB: place };

    activeFormGB === "boy"
      ? setBoyDataGB(updatedDataGB)
      : setBrideDataGB(updatedDataGB);

    setQueryGB(place.name);
    setResultsGB([]);
  };

  // -------------------------
  // TIME LOGIC
  // -------------------------

  const hoursGB = Array.from({ length: 24 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  const minutesGB = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  const handleTimeChangeGB = (type, value) => {

    let dataGB =
      activeFormGB === "boy" ? { ...boyDataGB } : { ...brideDataGB };

    if (type === "hour") {
      dataGB.hourGB = value;

      const hourNum = parseInt(value);

      if (hourNum > 12) {
        dataGB.ampmGB = "PM";
      } else {
        dataGB.ampmGB = "AM";
      }
    }

    if (type === "minute") {
      dataGB.minuteGB = value;
    }

    if (dataGB.hourGB && dataGB.minuteGB) {
      dataGB.timeGB = `${dataGB.hourGB}:${dataGB.minuteGB}`;
    }

    activeFormGB === "boy"
      ? setBoyDataGB(dataGB)
      : setBrideDataGB(dataGB);
  };

  // -------------------------
  // SUBMIT
  // -------------------------

  const handleSubmitBoyGB = (e) => {
    e.preventDefault();
    setActiveFormGB("bride");
    setStepGB(2);
    setQueryGB("");
  };

  const handleSubmitBrideGB = (e) => {
    e.preventDefault();

    const finalDataGB = {
      boyDetailsGB: boyDataGB,
      brideDetailsGB: brideDataGB,
    };

    console.log("FINAL DATA GB:", finalDataGB);
  };

  const currentDataGB =
    activeFormGB === "boy" ? boyDataGB : brideDataGB;

  const setCurrentDataGB =
    activeFormGB === "boy" ? setBoyDataGB : setBrideDataGB;

  // Convert for display (24 → 12 format)
  const getDisplayHourGB = () => {
    if (!currentDataGB.hourGB) return "";

    let hour = parseInt(currentDataGB.hourGB);
    let displayHour = hour % 12 || 12;

    return String(displayHour).padStart(2, "0");
  };

  return (
    <section>
      <div className="kundali_detail_section">
        <div className="container">
          <div className="kundali_detail_row d-flex">
            {/* ======================== Kundali / Birth Chart ======================== */}
            <div className="kundali_detail_col">
              <div className="kundali_detail_block">
                <div className="kundali_d_flex d-flex align-items-center justify-content-between">
                  <div className="kundali_d_head">
                    <h4>Kundali / Birth Chart</h4>
                    <h5>Enter Birth Details</h5>
                  </div>
                  <div className="kundali_d_icon">
                    <img src={kundaliIcon1} alt="icon" className="img-fluid" />
                  </div>
                </div>

                <div className="kundali_d_form">
                  <form onSubmit={handleSubmit1} className="d-flex flex-wrap">
                    <div className="form_group w-100">
                      <input
                        type="text"
                        className="input_sec w-100"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form_group">
                      <input
                        type="date"
                        className="input_sec w-100"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form_group">
                      <div style={{ display: "flex", gap: "10px" }}>
                        {/* 1–24 Hour Select */}
                        <select className="dt-slt"
                          value={hour24}
                          onChange={(e) => handleHourChange(e.target.value)}
                        >
                          <option value="">HH</option>
                          {hours24.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </select>

                        {/* Minute */}
                        <select className="dt-slt"
                          value={minute}
                          onChange={(e) => setMinute(e.target.value)}
                        >
                          <option value="">MM</option>
                          {minutes.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>

                        {/* Auto AM/PM */}
                        <div className="ampmshoe">{ampm}</div>
                        {/* <input
          type="text"
          value={ampm}
          readOnly
          placeholder="AM/PM"
          style={{ width: "70px" }}
        /> */}
                      </div>
                    </div>

                    {/* 
      <p style={{ marginTop: "10px" }}>
        Display Format: <strong>{getDisplayHour()}:{minute} {ampm}</strong>
      </p>

      <p>
        Stored (24hr): <strong>{finalTime}</strong>
      </p> */}

                    <div className="form_group">
                      <select
                        className="form-select input_sec"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div
                      className="form_group"
                      style={{ position: "relative" }}
                    >
                      <input
                        type="text"
                        placeholder="Search Birth Place"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="form-control input_sec"
                        onFocus={() =>
                          results.length > 0 && setShowDropdown(true)
                        }
                      />

                      {showDropdown && results.length > 0 && (
                        <ul className="dropdown-list">
                          {results.map((place, index) => (
                            <li
                              style={{ color: "black" }}
                              key={index}
                              onClick={() => handleSelect(place)}
                            >
                              {place.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="form_btn w-100">
                      <button type="submit" className="site_btn w-100 d-block">
                        GET KUNDALI
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ======================== Kundali Matching ======================== */}
            <div className="kundali_detail_col">
              <div className="kundali_detail_block">
                <div className="kundali_d_flex d-flex align-items-center justify-content-between">
                  <div className="kundali_d_head">
                    <h4>Kundali Matching</h4>
                    <h5>Enter {stepGB === 1 ? "Boy’s" : "Girl’s"} Details</h5>
                  </div>
                  <div className="kundali_d_icon">
                    <img src={kundaliIcon2} alt="icon" className="img-fluid" />
                  </div>
                </div>

                <div className="kundali_d_form">
      <form
        onSubmit={stepGB === 1 ? handleSubmitBoyGB : handleSubmitBrideGB}
        className="d-flex flex-wrap"
      >
        <div className="form_group w-100">
          <input
            type="text"
            placeholder={stepGB === 1 ? "Boy Name" : "Bride Name"}
            className="input_sec w-100"
            value={currentDataGB.nameGB}
            onChange={(e) =>
              setCurrentDataGB({
                ...currentDataGB,
                nameGB: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="form_group">
          <input
            type="date"
            className="input_sec w-100"
            value={currentDataGB.dateGB}
            onChange={(e) =>
              setCurrentDataGB({
                ...currentDataGB,
                dateGB: e.target.value,
              })
            }
            required
          />
        </div>

        {/* TIME */}
        <div className="form_group d-flex gap-2 align-items-center">
          <select className="dt-slt"
            value={currentDataGB.hourGB}
            onChange={(e) =>
              handleTimeChangeGB("hour", e.target.value)
            }
            required
          >
            <option value="">HH</option>
            {hoursGB.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>

          <select className="dt-slt"
            value={currentDataGB.minuteGB}
            onChange={(e) =>
              handleTimeChangeGB("minute", e.target.value)
            }
            required
          >
            <option value="">MM</option>
            {minutesGB.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* SHOW AM/PM */}
          <p>{currentDataGB.ampmGB}</p>
        </div>

        {/* PLACE */}
        <div className="form_group w-100 position-relative">
          <input
            type="text"
            placeholder="Search Birth Place"
            className="input_sec w-100"
            value={queryGB}
            onChange={(e) => {
              setQueryGB(e.target.value);
              setActiveFormGB(stepGB === 1 ? "boy" : "bride");
            }}
            required
          />

          {resultsGB.length > 0 && (
            <ul className="dropdown-list">
              {resultsGB.map((place) => (
                <li style={{color:"black"}}
                  key={place.id}
                  onClick={() =>
                    handlePlaceSelectGB(place)
                  }
                >
                  {place.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form_btn w-100">
          <button type="submit" className="site_btn w-100">
            {stepGB === 1 ? "Continue" : "Submit"}
          </button>
        </div>
      </form>
    </div>
              </div>
            </div>

            {/* ======================== Today’s Panchang ======================== */}
            <div className="kundali_detail_col">
              <div className="kundali_detail_block kundali_detail_box">
                <div className="kundali_d_flex border-0 d-flex align-items-center justify-content-between px-0">
                  <div className="kundali_d_head">
                    <h4>Today’s Panchang</h4>
                  </div>
                  <div className="kundali_d_icon">
                    <img src={kundaliIcon3} alt="icon" className="img-fluid" />
                  </div>
                </div>

                <div className="panchang_sec">
                  <div className="panchang_box d-flex">
                    <div className="panchang_inner">
                      <p className="input_sec">Sunrise - Sunset</p>
                      <span className="input_sec">
                        {Panchang?.sunAndMoonTime?.todaySunRise} -{" "}
                        {Panchang?.sunAndMoonTime?.todaySunSet}
                      </span>
                    </div>
                    <div className="panchang_inner">
                      <p className="input_sec">Moonrise - Moonset</p>
                      <span className="input_sec">
                        {Panchang?.sunAndMoonTime?.todayMoonRise} -{" "}
                        {Panchang?.sunAndMoonTime?.todayMoonSet}
                      </span>
                    </div>
                  </div>
                </div>

                <ul>
                  <li>
                    <span>Tithi</span>
                    <span>{Panchang?.tithi?.name}</span>
                  </li>
                  <li>
                    <span>Nakshatra</span>
                    <span>
                      {Panchang?.panchangNakshatraResponse?.nakshtraName}{" "}
                      {Panchang?.panchangNakshatraResponse?.end}
                    </span>
                  </li>
                  <li>
                    <span>Yog</span>
                    <span>{Panchang?.yogResponse?.yogName}</span>
                  </li>
                  <li>
                    <span>Karan</span>
                    <span>{Panchang?.panchangKaranResponse?.karanName}</span>
                  </li>
                  <li>
                    <span>Paksha</span>
                    <span>{Panchang?.paksha?.pakshaName}</span>
                  </li>
                  <li>
                    <span>Shaka Samvat</span>
                    <span>
                      {Panchang?.panchnagShakaSamvat?.shakaSamvatName}
                    </span>
                  </li>
                  <li>
                    <span>Vikram Samvat</span>
                    <span>
                      {Panchang?.panchnagVikramSamvat?.vikramSamvatName}
                    </span>
                  </li>
                </ul>

                <div className="form_btn w-100">
                  <Link
                    to="/detailed-panchang"
                    className="site_btn w-100 d-block yello_bg"
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            {/* ======================== End Panchang ======================== */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KundaliDetails;
