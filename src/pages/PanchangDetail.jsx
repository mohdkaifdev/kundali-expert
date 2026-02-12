import React from 'react';
import sundevta from '../assets/images/sundevta.svg';
import moondevta from '../assets/images/moondevta.svg';
import bgimgkl from '../assets/images/bgimgkl.svg'
import api from '../services/api';
import { useSelector, useDispatch } from "react-redux";
import { loadUserFromStorage } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useRef } from 'react';

function PanchangDetail() {
    const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [Panchang, setPanchang] = useState({});
  // Add more state for forms
    const user = useSelector(
    (state) => state.user.user
  );
  
    console.log(user)

  useEffect(()=>{
     dispatch(loadUserFromStorage());
  },[dispatch])

  const todaypanchang = async (o) => {
    const now = new Date();

    const formattedDateTime =
  now.getFullYear() + "-" +
  String(now.getMonth() + 1).padStart(2, "0") + "-" +
  String(now.getDate()).padStart(2, "0") + " " +
  String(now.getHours()).padStart(2, "0") + ":" +
  String(now.getMinutes()).padStart(2, "0") + ":" +
  String(now.getSeconds()).padStart(2, "0");
    let payload
    if(user){
       payload= {
      formData: {
        dateAndTime: formattedDateTime,
        placetName: user?.birthPlace?.name,
        placeLatitude: user?.birthPlace?.latitude,
        placeLongitude: user?.birthPlace?.longitudes,
        timezoneId: 0,
      },
    }
    }
    else if(o){
        console.log(o);
       payload= {
      formData: {
        dateAndTime: formattedDateTime,
        placetName: o.name,
        placeLatitude: o.latitude,
        placeLongitude: o.longitudes,
        timezoneId: 0,
      }
    }
}
else{
    
    payload= {
      formData: {
        dateAndTime: formattedDateTime,
        placetName: "Ujjain, Madhya Pradesh",
        placeLatitude: "23.17646598815918",
        placeLongitude: "75.78851318359375",
        timezoneId: 0,
      }
    }
}
    console.log(payload);
    const res = await api.post("/Panchang/today",payload);
    setPanchang(res?.data?.data);
    console.log(res?.data?.data);
  };

  useEffect(() => {
    todaypanchang(null);
  }, []);

  const getTodayDate = () => {
  const today = new Date();

  return today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const todayDate = getTodayDate();

const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

useEffect(() => {
  if (query.length < 2) {
    setResults([]);
    return;
  }

  const getPlaces = async () => {
    try {
      const res = await api.get(
        `/place/searchPlace`,
        {
          params: {
            initialLetters: query,
          },
        }
      );

      setResults(res.data || []);
    } catch (error) {
      console.error("Place search failed", error);
      setResults([]);
    }
  };

  getPlaces();
}, [query]);


  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!boxRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (place) => {
    setSelectedPlace(place);   // ✅ full object stored
    setQuery(place.name);      // ✅ only name shown
    console.log(place);
    setOpen(false);
    todaypanchang(place);
    console.log(place)
  };
  return (
    <>
  <section className="panchangui-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="panchangui-card">
            {/* Title */}
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="panchangui-title">
                  Today’s Panchang
                  <span />
                </h2>
              </div>
            </div>
            {/* Info Row */}
            <div className="row align-items-center panchangui-info-row">
              <div className="col-md-6 col-lg-6">
                <div className="panchangui-info-block panchangui-sunrise">
                  <p className="panchangui-label">Sunrise - Sunset</p>
                  <div className="panchangui-pill">
                    <span className="panchangui sun">
                      <img src={sundevta} />
                    </span>
                    {Panchang?.sunAndMoonTime?.todaySunRise} - {Panchang?.sunAndMoonTime?.todaySunSet}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 text-md-end">
                <div className="panchangui-info-block panchangui-moonrise">
                  <p className="panchangui-label">Moonrise - Moonset</p>
                  <div className="panchangui-pill">
                    <span className="panchangui moon">
                      <img src={moondevta} />
                    </span>
                    {Panchang?.sunAndMoonTime?.todayMoonRise} - {Panchang?.sunAndMoonTime?.todayMoonSet}
                  </div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="row">
              <div className="col-12">
                <div className="panchangui-image-box">
                  <img
                    src={bgimgkl}
                    alt="Panchang"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ------------- */}
  <section className="panchangui-details">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Header Row */}
          <div className="panchangui-details-header">
            <div className="reverse-r">
              <span className="panchangui-pill pink">{todayDate}</span>
              {/* Search Box */}
             <div
      ref={boxRef}
      className="panchangui-search"
      id="panchanguiOpenSearch"
    >
      <span className="panchangui-search-icon" />

      <input
        type="text"
        placeholder="Search city"
        className="panchangui-search-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />

      {open && results.length > 0 && (
        <ul className="panchangui-search-dropdown">
          {results.map((item) => (
            <li
              key={item.id}
              className="panchangui-search-item"
              onClick={() => handleSelect(item)}
              style={{color: "black"}}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}

      {query && (
        <span
          className="panchangui-close"
          onClick={() => {
            setQuery("");
            setSelectedPlace(null);
            setResults([]);
          }}
        >
          ×
        </span>
      )}
    </div>
            </div>
            {/* Modal */}
            <div className="panchangui-modal" id="panchanguiSearchModal">
              <div className="panchangui-modal-overlay" />
              <div className="panchangui-modal-content">
                <div className="panchangui-modal-header">
                  <h3>Search Location</h3>
                  <span className="panchangui-modal-close">×</span>
                </div>
                <div className="panchangui-modal-body">
                  <input
                    type="text"
                    className="panchangui-modal-input"
                    placeholder="Search city, state..."
                    autofocus=""
                  />
                  {/* Example filters */}
                  <div className="panchangui-filter-list">
                    <div className="panchangui-filter-item">
                      Ujjain, Madhya Pradesh
                    </div>
                    <div className="panchangui-filter-item">
                      Indore, Madhya Pradesh
                    </div>
                    <div className="panchangui-filter-item">
                      Bhopal, Madhya Pradesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="panchangui-pill pink">Panchang (5:30 AM)</span>
          </div>
          {/* Table Card */}
          <div className="table-responsive">
            <table className="panchang-table panchangui">
              <tbody>
                {/* Tithi */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Tithi
                  </td>
                </tr>
                <tr>
                  <td className="label">Tithi Number</td>
                  <td className="value">{Panchang?.tithi?.tithiNumber}</td>
                </tr>
                <tr>
                  <td className="label">Tithi Name</td>
                  <td className="value">{Panchang?.tithi?.name}</td>
                </tr>
                <tr>
                  <td className="label">Deity</td>
                  <td className="value">{Panchang?.tithi?.deity}</td>
                </tr>
                <tr>
                  <td className="label">Tithi End Time</td>
                  <td className="value">{Panchang?.tithi?.endTithi}</td>
                </tr>
                {/* Nakshatra */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Nakshatra
                  </td>
                </tr>
                <tr>
                  <td className="label">Number</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.nakshtraNumber}</td>
                </tr>
                <tr>
                  <td className="label">Name</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.nakshtraName}</td>
                </tr>
                <tr>
                  <td className="label">Ruler</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.ruler}</td>
                </tr>
                <tr>
                  <td className="label">Deity</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.deity}</td>
                </tr>
                <tr>
                  <td className="label">Nakshatra End Time</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.ruler}</td>
                </tr>
                {/* Yog */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Yog
                  </td>
                </tr>
                <tr>
                  <td className="label">Number</td>
                  <td className="value">{Panchang?.yogResponse?.yogNumber}</td>
                </tr>
                <tr>
                  <td className="label">Name</td>
                  <td className="value">{Panchang?.yogResponse?.yogName}</td>
                </tr>
                <tr>
                  <td className="label">Meaning</td>
                  <td className="value">
                  {Panchang?.yogResponse?.yogMeaning}
                  </td>
                </tr>
                <tr>
                  <td className="label">Deity</td>
                  <td className="value">{Panchang?.yogResponse?.deityName}</td>
                </tr>
                <tr>
                  <td className="label">Yog End Time</td>
                  <td className="value">{Panchang?.yogResponse?.endYog}</td>
                </tr>
                {/* Karan */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Karan
                  </td>
                </tr>
                <tr>
                  <td className="label">Number</td>
                  <td className="value">{Panchang?.panchangKaranResponse?.karanNumber}</td>
                </tr>
                <tr>
                  <td className="label">Name</td>
                  <td className="value">{Panchang?.panchangKaranResponse?.karanName}</td>
                </tr>
                <tr>
                  <td className="label">Special</td>
                  <td className="value" />{Panchang?.panchangKaranResponse?.karanSpecial}
                </tr>
                <tr>
                  <td className="label">Deity</td>
                  <td className="value">{Panchang?.panchangKaranResponse?.karanDeity}</td>
                </tr>
                <tr>
                  <td className="label">Karan End Time</td>
                  <td className="value">{Panchang?.panchangKaranResponse?.endKaran}</td>
                </tr>
                {/* Hindu Month */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Hindu Month
                  </td>
                </tr>
                <tr>
                  <td className="label">Adhik Status</td>
                  <td className="value">{Panchang?.adhikStatus}</td>
                </tr>
                <tr>
                  <td className="label">Purnimanta</td>
                  <td className="value">{Panchang?.purnimanta}</td>
                </tr>
                <tr>
                  <td className="label">Amanta</td>
                  <td className="value">{Panchang?.amanta}</td>
                </tr>
                {/* Nakshatra Affliction */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Nakshatra Affliction
                  </td>
                </tr>
                <tr>
                  <td className="label">Moon Residence</td>
                  <td className="value">{Panchang?.panchagNivasAndShoolResponse?.moonNivasDirection}</td>
                </tr>
                <tr>
                  <td className="label">Directional Affliction</td>
                  <td className="value">{Panchang?.panchagNivasAndShoolResponse?.dishaShoolDirection}</td>
                </tr>
                <tr>
                  <td className="label">Directional Remedie</td>
                  <td className="value">
                   {Panchang?.panchagNivasAndShoolResponse?.dishaShoolRemdies}
                  </td>
                </tr>
                <tr>
                  <td className="label">Nakshatra Affliction</td>
                  <td className="value">{Panchang?.panchagNivasAndShoolResponse?.nakshatraShoolDirection}</td>
                </tr>
                <tr>
                  <td className="label">Nakshatra Remedie</td>
                  <td className="value">
                   {Panchang?.panchagNivasAndShoolResponse?.nakshatraShoolRemdies}
                  </td>
                </tr>
                <tr>
                  <td className="label">Agni Residence</td>
                  <td className="value">{Panchang?.vaasResponse?.agniVasa}</td>
                </tr>
                <tr>
                  <td className="label">Bhadra Residence</td>
                  <td className="value">{Panchang?.vaasResponse?.bhadraVasa}</td>
                </tr>
                <tr>
                  <td className="label">Shiva Residence</td>
                  <td className="value">{Panchang?.vaasResponse?.shivaVasa}</td>
                </tr>
                <tr>
                  <td className="label">Rahu Residence</td>
                  <td className="value">{Panchang?.vaasResponse?.rahuVasa}</td>
                </tr>
                {/* Season and Equinox */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Season and Equinox
                  </td>
                </tr>
                <tr>
                  <td className="label">Paksha</td>
                  <td className="value">{Panchang?.paksha?.pakshaName}</td>
                </tr>
                <tr>
                  <td className="label">Season</td>
                  <td className="value">{Panchang?.ritu?.rituName}</td>
                </tr>
                <tr>
                  <td className="label">Ayan</td>
                  <td className="value">{Panchang?.panchangAyanResponse?.ayanName}</td>
                </tr>
                {/* Lunar Month and Shool */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Lunar Month and Shool
                  </td>
                </tr>
                <tr>
                  <td className="label">Moon Sign</td>
                  <td className="value">{Panchang?.moonSigne}</td>
                </tr>
                <tr>
                  <td className="label">Vikram Samvat</td>
                  <td className="value">{Panchang?.panchnagVikramSamvat?.vikramSamvatYear}</td>
                </tr>
                <tr>
                  <td className="label">Shaka Samvat</td>
                  <td className="value">{Panchang?.panchnagShakaSamvat?.shakaSamvatYear}</td>
                </tr>
                <tr>
                  <td className="label">Vikram Samvat Name</td>
                  <td className="value">{Panchang?.panchnagVikramSamvat?.vikramSamvatName}</td>
                </tr>
                <tr>
                  <td className="label">Shaka Samvat Name</td>
                  <td className="value">{Panchang?.panchnagShakaSamvat?.shakaSamvatName}</td>
                </tr>
                {/* Auspicious Timing */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Auspicious Timing
                  </td>
                </tr>
                <tr>
                  <td className="label">Auspicious Timing</td>
                  <td className="value">{Panchang?.auspiciousMuhuratResponse?.abhijeetMuhurat?.startTime} - {Panchang?.auspiciousMuhuratResponse?.abhijeetMuhurat?.endTime} </td>
                </tr>
                <tr>
                  <td className="label">Godhuli Muhurta</td>
                  <td className="value">{Panchang?.auspiciousMuhuratResponse?.godhuliMuhurta?.startTime} - {Panchang?.auspiciousMuhuratResponse?.godhuliMuhurta?.endTime}</td>
                </tr>
                <tr>
                  <td className="label">Sarvartha Siddhi Yog</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.sarvarthaSiddhiYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.sarvarthaSiddhiYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Amritsiddhi Yog</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.amritSiddhiYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.amritSiddhiYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Tripushkara Yoga</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.tripushkarYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.tripushkarYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Dwipushkar Yog</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.dwipushkarYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.dwipushkarYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Ravi Yog</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.raviYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.raviYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Vijay Muhurta</td>
                  <td className="value">{Panchang?.auspiciousMuhuratResponse?.vijayMuhurat?.startTime} -{Panchang?.auspiciousMuhuratResponse?.vijayMuhurat?.endTime}</td>
                </tr>
                <tr>
                  <td className="label">Nishita Muhurta</td>
                  <td className="value">{Panchang?.auspiciousMuhuratResponse?.nishatMuhurat?.startTime} - {Panchang?.auspiciousMuhuratResponse?.nishatMuhurat?.startTime}</td>
                </tr>
                {/* Inauspicious Timing */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Inauspicious Timing
                  </td>
                </tr>
                <tr>
                  <td className="label">Rahu Kala</td>
                  <td className="value">{Panchang?.rahuAndGulitAndYamGhantaKaalResponse?.rahuKaalStart} - {Panchang?.rahuAndGulitAndYamGhantaKaalResponse?.rahuKaalEnd}</td>
                </tr>
                <tr>
                  <td className="label">Gulika Kala</td>
                  <td className="value">{Panchang?.rahuAndGulitAndYamGhantaKaalResponse?.gulitKaalStart} - {Panchang?.rahuAndGulitAndYamGhantaKaalResponse?.gulitKaalStart}</td>
                </tr>
                <tr>
                  <td className="label">Yamaganda Kala</td>
                  <td className="value">{Panchang?.rahuAndGulitAndYamGhantaKaalResponse?.yamGhantaKaalStart} - {Panchang?.rahuAndGulitAndYamGhantaKaalResponse?.yamGhantaKaalEnd}</td>
                </tr>
                <tr>
                  <td className="label">Bhadra Mukh</td>
                  <td className="value">{Panchang?.bhadraResponse?.bhadraMukhStartTime == null ? (<>Not Available</>):(<>{Panchang?.bhadraResponse?.bhadraMukhStartTime} : {Panchang?.bhadraResponse?.bhadraMukhEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Bhadra Pooch</td>
                  <td className="value">{Panchang?.bhadraResponse?.bhadraPoochStartTime == null ? (<>Not Available</>):(<>{Panchang?.bhadraResponse?.bhadraPoochStartTime} : {Panchang?.bhadraResponse?.bhadraPoochEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Aadal Yog</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.aadalYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.aadalYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Viddal Yoga</td>
                  <td className="value">{Panchang?.panchnagMuhuratYog?.vidalYog == false ? (<>Not Available</>):(<>{Panchang?.panchnagMuhuratYog?.vidalYogEndTime}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Panchaka</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.panchakResponse?.moonPanchak == false ? (<>Not Available</>):(<>{Panchang?.panchangNakshatraResponse?.panchakResponse?.moonPanchak}</>)}</td>
                </tr>
                <tr>
                  <td className="label">Baana</td>
                  <td className="value">{Panchang?.panchangNakshatraResponse?.panchakResponse?.sunPanchakBaadName}</td>
                </tr>
                {/* Day Choghadiya */}
                <tr>
                  <td colSpan={2}>
                    <div className="choghadiya-section">
                      <h3 className="choghadiya-title">Day Choghadiya</h3>
                      <table className="choghadiya-table">
                        <thead>
                          <tr>
                            <th>Choghadiya Name</th>
                            <th>Start-End Time</th>
                          </tr>
                        </thead>
                        <tbody>
                         {Panchang?.chaughadiyaMuhurat?.dayChaughadiya.map((item,index)=>{
                            return(
 <tr>
                            <td>{item?.chaughadiyaName}</td>
                            <td>{item?.startDate} – {item?.endDate}</td>
                          </tr>
                            )
                         })}
                         
                          
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                {/* Night Choghadiya */}
                <tr>
                  <td colSpan={2}>
                    <div className="choghadiya-section">
                      <h3 className="choghadiya-title">Night Choghadiya</h3>
                      <table className="choghadiya-table">
                        <thead>
                          <tr>
                            <th>Choghadiya Name</th>
                            <th>Start-End Time</th>
                          </tr>
                        </thead>
                        <tbody>
                         {Panchang?.chaughadiyaMuhurat?.nightChaughadiya.map((item,index)=>{
                            return(
 <tr>
                            <td>{item?.chaughadiyaName}</td>
                            <td>{item?.startDate} – {item?.endDate}</td>
                          </tr>
                            )
                         })}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                {/* Other */}
                <tr>
                  <td colSpan={2} className="section-header">
                    Other
                  </td>
                </tr>
                <tr>
                  <td className="label">Kali Yuga</td>
                  <td className="value">{Panchang?.kaliyug}</td>
                </tr>
                <tr>
                  <td className="label">Julian Date</td>
                  <td className="value">{Panchang?.julianDate}</td>
                </tr>
                <tr>
                  <td className="label">Julian Day</td>
                  <td className="value">{Panchang?.julianDay}</td>
                </tr>
                <tr>
                  <td className="label">Lahiri Ayanamsa</td>
                  <td className="value">{Panchang?.lahiriAyansha}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default PanchangDetail