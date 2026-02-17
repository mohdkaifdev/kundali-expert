import React from "react";
import chatLogo from "../../assets/images/chat_logo.webp";
import UserPageChatModal from "../UserPageChatModal";
import { useEffect, useState} from "react";
import api from "../../services/api";
import {ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
import { setSubUser } from "../../features/subuserslice/subuserSlice";
const ProfilePage = () => {
  const {id} = useParams();
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
    birthPlaceId: "",
    birthPlaceName: "",
    birthPlaceLatitude: "",
    birthPlaceLongitude: "",
    timezoneId: ""
  });

  const [curretuser,setcurrentuser]=useState({});
  const dispatch = useDispatch();
const reduxUser = useSelector((state) => state.user.user);

const reduxSubUser = useSelector((state) => state.subuser);

const validuser = id=='create-user';
// useEffect(()=>{

//   const detailofsubuser = reduxSubUser.subuser.find((user)=>{
//    return user.subUserId == id
//   })
//   setcurrentuser(detailofsubuser);
//   console.log(detailofsubuser);
// },[reduxSubUser])



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

  if (!reduxSubUser) return;

  const detailofsubuser = reduxSubUser.subuser.find((user)=>{
   return user.subUserId == id
  })
  let dob =  formatDate(detailofsubuser?.birthDateAndTime);
  let time = formatDate(detailofsubuser?.birthTime);

  console.log(detailofsubuser);

  if (validuser) return;

  if(detailofsubuser == undefined){
    window.location.href = '/404'
  }
  
  setFormData({
    name: detailofsubuser.name || "",
    gender: detailofsubuser.gender || "",
    dob,
    time,
    email: detailofsubuser.email || "",
    birthPlaceId: detailofsubuser?.birthPlace?.id,
    birthPlaceName: detailofsubuser?.birthPlace?.name,
    birthPlaceLatitude: detailofsubuser?.birthPlace?.latitude,
    birthPlaceLongitude: detailofsubuser?.birthPlace?.longitudes,
    timezoneId: detailofsubuser?.birthPlace?.timezone
  });
  setSearch(detailofsubuser?.birthPlace?.name || "");

 
}, [reduxSubUser]);

const setsubuser = async()=>{
 const subUserRes = await api.get("/v1/user/getMySubUsers?subUsername=");
         
         console.log(subUserRes);
         dispatch(setSubUser(subUserRes?.data?.data));
}


 const formatDate = (date) => {
  if (!date) return "";

  // If already YYYY-MM-DD → return directly
  if (date.includes("-")) return date;
  // If DD/MM/YYYY → convert
  if (date.includes("/")) {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  }

  return date;
};
const handleSave = async () => {

  const formatTime = (time) => {
    if (!time) return "";

    // If already HH:MM:SS → return as is
    if (time.split(":").length === 3) return time;

    // If HH:MM → add seconds
    return `${time}:00`;
  };

  const formattedDate = formatDate(formData.dob);
  const formattedTime = formatTime(formData.time);

  const birthDateTime = `${formattedDate}T${formattedTime}`;
  const finalOutput = `${formattedDate} ${formattedTime} Asia/Kolkata`;

  const payload = {
    formData: {
      name: formData.name,
      gender: formData.gender.toUpperCase(),
      birthDateAndTime: birthDateTime,
      birthPlaceId: formData.birthPlaceId,
      birthPlaceName: formData.birthPlaceName,
      birthPlaceLatitude: formData.birthPlaceLatitude,
      birthPlaceLongitude: formData.birthPlaceLongitude,
      timezoneId: formData.timezoneId,
      imageFileId: "",
      languageId: formData.languageId || 1, // safer default
      birthDateAndTimeGmt: finalOutput
    }
  };

  console.log(payload);

  const url = validuser ? `/v1/user/saveSubUsers`:`/v1/user/updateSubUserProfile?subUserId=${id}`
  try {
    const res = await api.post(
      url,
      payload
    );

    if (res?.data?.response?.responseCode === "200") {


      setsubuser();

      toast.success("Details updated successfully", {
        autoClose: 1500,
        onClose: () => navigate("/")
      });

    } else {
      toast.error("Something went wrong");
    }

  } catch (error) {
    toast.error("API Error");
    console.error(error);
  }
};



    
// const getsubuserdetailbyid = ()=>{

// }
  
 

  const fetchPlaces = async (keyword) => {
    if (!keyword) {
      setPlaces([]);
      return;
    }
    try {
      const res = await api.get(
        `/v1/place/searchPlace?initialLetters=${keyword}`,
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
                        {/* <p>{formData?.email}</p> */}
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
                              className={`site_btn ${formData.gender === "Male" ? "activegender" : ""}`}
                              onClick={() => handleGender("Male")}
                            >
                              ♂ Male
                            </button>
                            <button
                              type="button"
                              className={`site_btn ${formData.gender === "Female" ? "activegender" : ""}`}
                              onClick={() => handleGender("Female")}
                            >
                              ♀ Female
                            </button>
                            <button
                              type="button"
                              className={`site_btn ${formData.gender === "Other" ? "activegender" : ""}`}
                              onClick={() => handleGender("Other")}
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

                        {/* <div className="form_group w-100">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control w-100"
                            required
                          />
                        </div> */}

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
