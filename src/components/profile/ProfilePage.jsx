import React from "react";
import chatLogo from "../../assets/images/chat_logo.webp";
import UserPageChatModal from "../UserPageChatModal";
import { useEffect, useState} from "react";
import api from "../../services/api";
import {ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
const ProfilePage = () => {
  const [mydetail, setmydetails] = useState({});
  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState([]);
  const [showList, setShowList] = useState(false);
 const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    time: "",
    email: "",
    place: "",
  });

  const dispatch = useDispatch();
const reduxUser = useSelector((state) => state.user.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGender = (gender) => {
    setFormData((prev) => ({ ...prev, gender }));
  };
//   const getMyDetails = async () => {
//     const res = await api.get("/v1/user/my");
//     console.log(res.data.data);
//     // setmydetails(res.data.data);

//     const data = res.data.data;

//     let dob = data.dob;
//     let time = data.time;

//     if (data.birthDateAndTime) {
//       const dateObj = new Date(data.birthDateAndTime);
//       dob = dateObj.toISOString().split("T")[0];
//       time = dateObj.toTimeString().slice(0, 5);
//     }
    
// setFormData({
//         name: data.name || "",
//       gender: data.gender || "",
//       dob: dob || "",
//       time: time || "",
//       email: data.email || "",
//       place: data?.birthPlace?.name || "",
//       birthPlaceId: data?.birthPlace?.id,
//       birthPlaceName: data?.birthPlace?.name,
//       birthPlaceLatitude: data?.birthPlace?.latitude,
//       birthPlaceLongitude: data?.birthPlace?.longitudes,
//       timezoneId: data?.birthPlace?.timezone,
//     });
//      setSearch(data?.birthPlace?.name);
//     // setmydetails({
//     //   actionInfo: {
//     //     actionId: "String",
//     //   },
//     //   formData: {
//     //     name: data.name,
//     //     gender: data.gende,
//     //     birthDateAndTime: data.birthDateAndTime,
//     //     birthPlaceId: data?.birthPlace?.id,
//     //     birthPlaceName: data?.birthPlace?.name,
//     //     birthPlaceLatitude: data?.birthPlace?.latitude,
//     //     birthPlaceLongitude: data?.birthPlace?.longitudes,
//     //     timezoneId: data?.birthPlace?.timezone,
//     //     imageFileId: 0,
//     //   },
//     //   sessionData: {
//     //     userDetails: {
//     //       isAdmin: 0,
//     //       isAllAccess: 0,
//     //       langCode: "String",
//     //       userEmailId: "String",
//     //       userId: 0,
//     //       userName: "String",
//     //     },
//     //   },
//     // });
//   };

useEffect(() => {
  if (!reduxUser) return;

  let dob = "";
  let time = "";

  if (reduxUser.birthDateAndTime) {
    const dateObj = new Date(reduxUser.birthDateAndTime);
    dob = dateObj.toISOString().split("T")[0];
    time = dateObj.toTimeString().slice(0, 5);
  }

  setFormData({
    name: reduxUser.name || "",
    gender: reduxUser.gender || "",
    dob,
    time,
    email: reduxUser.email || "",
    birthPlaceId: reduxUser?.birthPlace?.id,
    birthPlaceName: reduxUser?.birthPlace?.name,
    birthPlaceLatitude: reduxUser?.birthPlace?.latitude,
    birthPlaceLongitude: reduxUser?.birthPlace?.longitudes,
    timezoneId: reduxUser?.birthPlace?.timezone
  });

  setSearch(reduxUser?.birthPlace?.name || "");
}, [reduxUser]);

  const handleSave = async () => {
  const birthDateTime = `${formData.dob}T${formData.time}:00`;

  const payload = {
    formData: {
      name: formData.name,
      gender: formData.gender,
      birthDateAndTime: birthDateTime,
      birthPlaceId: formData.birthPlaceId,
      birthPlaceName: formData.birthPlaceName,
      birthPlaceLatitude: formData.birthPlaceLatitude,
      birthPlaceLongitude: formData.birthPlaceLongitude,
      timezoneId: formData.timezoneId,
      email: formData.email,
      imageFileId: 0
    }
  };

  const res = await api.put("/user/updateMainUser", payload);

  if (res?.data?.response?.responseCode === "200") {

    dispatch(updateUser({
      ...reduxUser,
      ...payload.formData,
      birthPlace: {
        id: formData.birthPlaceId,
        name: formData.birthPlaceName,
        latitude: formData.birthPlaceLatitude,
        longitudes: formData.birthPlaceLongitude,
        timezone: formData.timezoneId
      }
    }));

    toast.success("Details updated successfully", {
      autoClose: 1500,
      onClose: () => navigate("/")
    });
  } else {
    toast.error("Something went wrong");
  }
};

    
  
 

  const fetchPlaces = async (keyword) => {
    if (!keyword) {
      setPlaces([]);
      return;
    }
    try {
      const res = await api.get(
        `/place/searchPlace?initialLetters=${keyword}`,
      );

      console.log(res);
      setPlaces(res?.data || []);
      setShowList(true);
    } catch (err) {
      console.error("Place API error", err);
    }
  };

  // Input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchPlaces(value);
  };

  // Select place
  const handleSelect = (place) => {
    setSearch(place.name);
    setShowList(false);
console.log(place);
    setFormData({
      ...formData,
      birthPlaceId: place.id,
      birthPlaceName: place.name,
      birthPlaceLatitude: place.latitude,
      birthPlaceLongitude: place.longitudes,
      timezoneId: place.timezoneId,
    });
  };
  return (
    <>
      <section>
        <div class="course_detail_section learn_section banner_space light_bg">
          <div class="container">
            <div class="banner_heading text-center">
              <h2 class="mrn_clr">Profile</h2>
            </div>
            <div class="modal d-block position-relative mt-md-0 mt-3">
              <div class="modal-dialog mb-0">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4
                      class="modal-title mrn_clr mb-0 d-flex align-items-center"
                      id="exampleModalLabel"
                    >
                      <img src={chatLogo} alt="logo" class="img-fluid" />
                      <div class="title_modal ps-2">
                        <span>{formData?.name}</span>
                        <p>{formData?.email}</p>
                      </div>
                    </h4>
                  </div>
                  <div class="modal-body">
                    <div class="modal_content">
                      <form>
                        <div className="form_group w-100">
                          <label>Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control w-100"
                            required
                          />
                        </div>

                        <div className="form_group w-100">
                          <label>Gender *</label>
                          <div className="birth_btns d-flex gap-2">
                            <button
                              type="button"
                              className={`site_btn ${formData.gender === "MALE" ? "activegender" : ""}`}
                              onClick={() => handleGender("MALE")}
                            >
                              ♂ Male
                            </button>
                            <button
                              type="button"
                              className={`site_btn ${formData.gender === "FEMALE" ? "activegender" : ""}`}
                              onClick={() => handleGender("FEMALE")}
                            >
                              ♀ Female
                            </button>
                            <button
                              type="button"
                              className={`site_btn ${formData.gender === "OTHER" ? "activegender" : ""}`}
                              onClick={() => handleGender("OTHER")}
                            >
                              ⚧ Other
                            </button>
                          </div>
                        </div>

                        <div className="form_group w-100">
                          <label>Date of Birth *</label>
                          <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="form-control w-100"
                            required
                          />
                        </div>

                        <div className="form_group w-100">
                          <label>Time of Birth *</label>
                          <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="form-control w-100"
                            required
                          />
                        </div>

                        <div className="form_group w-100">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control w-100"
                            required
                          />
                        </div>

                        <div className="form_group w-100">
                          <div className="form_group w-100 position-relative">
                            <label>Enter Birth Place *</label>

                            <input
                              type="text"
                              value={search}
                              onChange={handleSearch}
                              className="form-control w-100"
                              placeholder="Search city..."
                              autoComplete="off"
                              required
                            />

                            {showList && places.length > 0 && (
                              <ul className="list-group position-absolute w-100 z-3">
                                {places.map((place) => (
                                  <li
                                    key={place.id}
                                    className="list-group-item list-group-item-action"
                                    onClick={() => handleSelect(place)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {place.name}, {place.state}, {place.country}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        <div className="form_btnss d-flex gap-md-3 gap-2 mt-4">
                          <button
                            type="button"
                            className="btn site_btn"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>

                          <button
                            type="button"
                            className="btn site_btn"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserPageChatModal />
      <ToastContainer/>
    </>
  );
};
export default ProfilePage;
