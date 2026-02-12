import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import PlaceSearchInput from "../../components/auth/profile-setup/PlaceSearchInput";
import PlaceSearchResults from "../../components/auth/profile-setup/PlaceSearchResults";
import ManualPlaceForm from "../../components/auth/profile-setup/ManualPlaceForm";
import PlaceBackButton from "../../components/auth/profile-setup/PlaceBackButton";
import PlaceNextButton from "../../components/auth/profile-setup/PlaceNextButton";
import api from "../../services/api";

export default function UserPlacePage() {
  const [showManual, setShowManual] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const navigate = useNavigate();

  // const getplacelist = async ()=>{
  //   const res = await api.get("/v1/place/list");
  //   console.log(res);
  // }
  
  // Page load par check karo agar pehle se saved hai
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("userProfile") || "{}");
    if (profile.birthPlaceId) {
      setSelectedPlace(profile);
      setSearchTerm(profile.birthPlaceName || "");
      setShowManual(false);
    }
  }, []);

 //getplacelist();

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setSearchTerm(place.name);
    setSearchResults([]);        // List hide ho jayegi
    setShowManual(false);        // Manual form hide rahega
console.log(place.name);
    // Data localStorage mein save kar do
    const saveData = {
      birthPlaceId: place.id,
      birthPlaceName: place.name,
      birthPlaceLatitude: place.latitude,
      birthPlaceLongitude: place.longitudes,
      timezoneId: place.timezoneEntity?.id || 1,
    };

    const existing = JSON.parse(localStorage.getItem("userProfile") || "{}");
    localStorage.setItem("userProfile", JSON.stringify({ ...existing, ...saveData }));

    toast.success("Place selected successfully!");
  };

  const handleNext = async () => {
    if (!selectedPlace) {
      toast.error("Please select a place");
      return;
    }
const profilemain = JSON.parse(localStorage.getItem("userProfile") || "{}");
console.log(profilemain);

    const payload = 
      {
    actionInfo: {
        actionId: "String"
    },
    formData: {
        name: profilemain?.name,
        gender: profilemain?.gender,
        birthDateAndTime:`${profilemain?.dob}T${profilemain?.time}:00`,
        birthPlaceId: profilemain?.birthPlaceId,
        birthPlaceName: profilemain?.birthPlaceName,
        birthPlaceLatitude: profilemain?.birthPlaceLatitude,
        birthPlaceLongitude: profilemain?.birthPlaceLongitude,
        timezoneId: profilemain?.timezoneId,
        languageId: 1
    },
    sessionData: {
        userDetails: {
            isAdmin: 0,
            isAllAccess: 0,
            langCode: "String",
            userEmailId: "String",
            userId: 0,
            userName: "String"
        }
    
}
    }

    const res = await api.post('/user/registration',payload);
    console.log(res);
    toast.success("Moving to next step...");

   navigate("/welcome"); // apna next route daal dena
  };

  return (
    <>
      <section>
        <div className="login_section b_space_top">
          <div className="container">
            <div className="heading_sec text-center">
              <h2 className="mrn_clr">Select your place of birth</h2>
            </div>

            <div className="login_block text-center pt-lg-2">
              <form className="mb-0">
                <div className="form-group position-relative mb-0">
                  <PlaceSearchInput
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setSearchResults={setSearchResults}
                    setShowManual={setShowManual}
                  />
                  <span className="search_input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <PlaceSearchResults results={searchResults} onSelect={handlePlaceSelect} />
                )}

                {/* Manual Form - sirf tab dikhe jab kuch type nahi kiya ya result nahi mila */}
                {showManual && (
                  <div className="search_input_block">
                    <div className="heading_sec mb-3">
                      <h5>Add Location Manually</h5>
                    </div>
                    <ManualPlaceForm onSave={() => navigate("/welcome")} />
                  </div>
                )}

                {/* Back & Next Buttons - jab place select ho gaya */}
                {!showManual && (
                  <div className="form_btnss d-flex gap-md-3 gap-2 mt-4">
                    <PlaceBackButton />
                    <PlaceNextButton onNext={handleNext} />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}