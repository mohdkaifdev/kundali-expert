import mailIcon from "../../assets/images/mail_icon.png";
import callIcon from "../../assets/images/call_icon.png";
import cartIcon from "../../assets/images/cart_icon.png";
import userIcon from "../../assets/images/user_icon.png";

import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadAuthFromStorage } from "../../features/auth/authSlice";
import { loadUserFromStorage } from "../../features/user/userSlice";
import { setUser } from "../../features/user/userSlice";
import {
  setSubUser,
  selectSubUser,
  clearSelectedSubUser,
  loadSubUserFromStorage,
} from "../../features/subuserslice/subuserSlice";
import api from "../../services/api";

import logo from "../../assets/images/logo.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const selectedSubUser = useSelector((state) => state.subuser?.selected);
  const subusersList = useSelector((state) => state.subuser?.subuser || []);
  const originalUserRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsSidebarOpen((prev) => !prev);
  };

  // 🔥 Load Redux from localStorage ONCE
  useEffect(() => {
    dispatch(loadAuthFromStorage());
    dispatch(loadUserFromStorage());
    dispatch(loadSubUserFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (!originalUserRef.current && user) originalUserRef.current = user;
  }, [user]);

  useEffect(() => {
    let mounted = true;
    async function fetchSubusers() {
      try {
        const res = await api.get("/v1/user/getMySubUsers?subUsername=");
        if (!mounted) return;
        const list = res?.data?.data || [];
        dispatch(setSubUser(list));
      } catch (err) {
        console.error("Error fetching subusers", err);
      }
    }
    if (isAuthenticated) fetchSubusers();
    return () => {
      mounted = false;
    };
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (selectedSubUser) {
      dispatch(setUser(selectedSubUser));
    } else if (originalUserRef.current) {
      dispatch(setUser(originalUserRef.current));
    }
  }, [selectedSubUser, dispatch]);

  const handleSubUserChange = (e) => {
    const id = e.target.value;
    if (!id) {
      dispatch(clearSelectedSubUser());
      if (originalUserRef.current) dispatch(setUser(originalUserRef.current));
      return;
    }
    const selected = subusersList.find((s) => String(s.subUserId) === String(id));
    if (selected) {
      dispatch(selectSubUser(selected));
      dispatch(setUser(selected));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("Header user:", user);
  return (
    <>
      {/* ================= Desktop View Header ================= */}
      <header
        className={`header-area desktop_view ${isSticky ? "fixed_header" : ""}`}
      >
        <div className="btm_nav_sec">
          <div className="container">
            <div className="row ht_row align-items-center">
              <div className="col-md-3">
                <div className="logo_sec">
                  <Link to="/">
                    <img src={logo} alt="logo" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-md-9">
                <div className="th_sec d-flex align-items-center justify-content-end">
                  <div className="contact_header d-flex align-items-center">
                    <span className="h_contact">
                      <img src={mailIcon} alt="mail" className="img-fluid" />
                    </span>
                    <div className="contact_name">
                      <h6>
                        <span className="d-block">Email</span>{" "}
                        <a href="mailto:info@kundaliexpert.com">
                          info@kundaliexpert.com
                        </a>
                      </h6>
                    </div>
                  </div>

                  <div className="contact_header d-flex align-items-center">
                    <span className="h_contact">
                      <img src={callIcon} alt="call" className="img-fluid" />
                    </span>
                    <div className="contact_name">
                      <h6>
                        <span className="d-block">Call Us</span>{" "}
                        <a href="tel:+918468920394">+91 98 183 183 03</a>
                      </h6>
                    </div>
                  </div>

                  <div className="contact_header border d-flex align-items-center">
                    <span className="h_contact">
                      <img src={cartIcon} alt="cart" className="img-fluid" />
                    </span>
                    <div className="contact_name">
                      <h6 className="cost">
                        <Link to="/wallet">
                          <span className="d-block">Cart</span> ₹ 0
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----- Desktop Main Menu ----- */}
        <div className="container">
          <div className="hb_sec">
            <div className="main_menu_sec d-flex align-items-center justify-content-between">
              <nav className="main-nav bottom-nav norm_menu d-flex align-items-between">
                <ul className="nav ps-0">
                  <a href="javascript:;" className="cross_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Services</a>
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/consultation-list">Consultation</Link>
                      </li>
                      <li>
                        <Link to="/buy-full-reports">Full Reports</Link>
                      </li>
                      <li>
                        <Link to="/personalized-reports">
                          Personalized Reports
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/astrology-course">Astrology Course</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Language</a>
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">हिंदी</a>
                      </li>
                      <li>
                        <a href="#">मराठी</a>
                      </li>
                      <li>
                        <a href="#">ગુજરાતી</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="menu_icon_sec">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className="contact_header user_sec d-flex align-items-center">
                <span>
                  <img src={userIcon} alt="user" className="img-fluid" />
                </span>
                {/* <div className="contact_name">
                  <h6><a href="#">Login</a></h6>
                </div> */}
                {isAuthenticated ? (
                  <div className="contact_name">
                    <div className="dropdown">
                      {/* <Link style={{ color: "white" }} to="/profile">
                        {selectedSubUser?.name || user?.name || "Profile"}
                      </Link> */}
                      {subusersList?.length > 0 && (
                        <select className="jekod"
                          value={selectedSubUser?.subUserId || ""}
                          onChange={handleSubUserChange}
                          style={{ marginLeft: 8, marginTop: 6 }}
                        >
                        
                          {subusersList.map((s) => (
                            <option key={s.subUserId} value={s.subUserId}>
                              {s.name || s.subUsername || s.email}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="contact_name">
                    <div className="dropdown">
                      <Link to="/login">Login</Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="hamberger_menu open" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* ----- Sticky Header (Desktop) ----- */}
            <nav className="main-nav bottom-nav sticky_menu">
              <div className="container">
                <div className="stick_block position-relative d-flex align-items-center justify-content-between">
                  <div className="logo_sec">
                    <a href="/">
                      <img src={logo} alt="logo" className="img-fluid" />
                    </a>
                  </div>
                  <nav className="main-nav bottom-nav norm_menu d-flex align-items-center justify-content-end">
                    <ul className="nav ps-0 justify-content-end">
                      <a href="#" className="cross_icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Services</Link>
                        <i className="fa-solid fa-angle-down"></i>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/consultation_list">Consultation</Link>
                          </li>
                          <li>
                            <Link to="/buy_full_reports">Full Reports</Link>
                          </li>
                          <li>
                            <Link to="/personalized_reports">
                              Personalized Reports
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">Shop</Link>
                      </li>
                      <li>
                        <Link to="#">Astrology Course</Link>
                      </li>
                      <li>
                        <Link to="#">Blog</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Language</a>
                        <i className="fa-solid fa-angle-down"></i>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <a href="#">हिंदी</a>
                          </li>
                          <li>
                            <a href="#">मराठी</a>
                          </li>
                          <li>
                            <a href="#">ગુજરાતી</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="menu_icon_sec">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                  <div className="contact_header user_sec d-flex align-items-center">
                    <span>
                      <img src={userIcon} alt="icon" className="img-fluid" />
                    </span>
                    {isAuthenticated ? (
                      <div className="contact_name">
                        {user?.name == null ? (
                          <div className="dropdown">
                            <Link to="/profile">Profile</Link>
                          </div>
                        ) : (
                          <div className="dropdown">
                            <Link to="/profile">{user?.name}</Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="contact_name">
                        <div className="dropdown">
                          <Link to="/login">Login</Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="hamberger_menu open" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ================= Mobile View Header ================= */}
      <header
        className={`header-area mob_view ${isSticky ? "fixed_header" : ""}`}
      >
        <div className="btm_nav_sec">
          <div className="container">
            <div className="row ht_row align-items-center">
              <div className="col-md-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="logo_sec">
                    <Link to="/">
                      <img src={logo} alt="logo" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="h_mob_contact d-flex">
                    <div className="contact_header d-flex align-items-center">
                      <a href="mailto:info@kundaliexpert.com">
                        <img src={mailIcon} alt="mail" className="img-fluid" />
                      </a>
                    </div>
                    <div className="contact_header d-flex align-items-center">
                      <a href="tel:+918468920394">
                        <img src={callIcon} alt="call" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="th_sec d-flex align-items-center justify-content-end">
                  <div className="contact_header border d-flex align-items-center">
                    <span className="h_contact">
                      <img src={cartIcon} alt="cart" className="img-fluid" />
                    </span>
                    <div className="contact_name">
                      <h6 className="cost">
                        <Link to="/wallet">
                          <span className="d-block">Cart</span> ₹ 0
                        </Link>
                      </h6>
                    </div>
                  </div>

                  <div className="main_menu_sec d-flex align-items-center justify-content-between">
                    <nav className="main-nav bottom-nav norm_menu d-flex align-items-between">
                      <ul className="nav ps-0">
                        <a href="javascript:void(0)" className="cross_icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Services</a>
                          <i className="fa-solid fa-angle-down"></i>
                          <ul className="sub-menu">
                            <li>
                              <Link to="consultation_list">Consultation</Link>
                            </li>
                            <li>
                              <Link to="buy_full_reports">Full Reports</Link>
                            </li>
                            <li>
                              <Link to="personalized_reports">
                                Personalized Reports
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Shop</Link>
                        </li>
                        <li>
                          <Link to="#">Astrology Course</Link>
                        </li>
                        <li>
                          <Link to="#">Blog</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Language</a>
                          <i className="fa-solid fa-angle-down"></i>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">English</a>
                            </li>
                            <li>
                              <a href="#">हिंदी</a>
                            </li>
                            <li>
                              <a href="#">मराठी</a>
                            </li>
                            <li>
                              <a href="#">ગુજરાતી</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    <div className="menu_icon_sec">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
                    <div className="contact_header user_sec d-flex align-items-center">
                      <span>
                        <img src={userIcon} alt="icon" className="img-fluid" />
                      </span>
                      {isAuthenticated ? (
                        <div className="contact_name">
                          <div className="dropdown">
                            <Link to="/profile">{selectedSubUser?.name || user?.name || "Profile"}</Link>
                            {subusersList?.length > 0 && (
                              <select
                                value={selectedSubUser?.subUserId || ""}
                                onChange={handleSubUserChange}
                                style={{ marginLeft: 8, marginTop: 6 }}
                              >
                                <option value="">Switch profile</option>
                                {subusersList.map((s) => (
                                  <option key={s.subUserId} value={s.subUserId}>
                                    {s.name || s.subUsername || s.email}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="contact_name">
                          <div className="dropdown">
                            <Link to="/login">Login</Link>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="hamberger_menu open" onClick={toggleSidebar}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  {/* ----- Sticky Header (Mobile) ----- */}
                  <nav
                    className={`main-nav bottom-nav sticky_menu ${
                      isSticky ? "active" : ""
                    }`}
                  >
                    <div className="container">
                      <div className="stick_block position-relative d-flex align-items-center justify-content-between">
                        <div className="logo_sec">
                          <Link to="/">
                            <img src={logo} alt="logo" className="img-fluid" />
                          </Link>
                        </div>
                        <nav className="main-nav bottom-nav norm_menu d-flex align-items-center justify-content-end">
                          <ul className="nav ps-0 justify-content-end">
                            <a href="javascript:void(0)" className="cross_icon">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/about">About</Link>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Services</a>
                              <i className="fa-solid fa-angle-down"></i>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/consultation_list">
                                    Consultation
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/buy_full_reports">
                                    Full Reports
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/personalized_reports">
                                    Personalized Reports
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                              <Link to="/astrology-course">
                                Astrology Course
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Language</a>
                              <i className="fa-solid fa-angle-down"></i>
                              <ul className="sub-menu">
                                <li>
                                  <a href="#">English</a>
                                </li>
                                <li>
                                  <a href="#">हिंदी</a>
                                </li>
                                <li>
                                  <a href="#">मराठी</a>
                                </li>
                                <li>
                                  <a href="#">ગુજરાતી</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                        <div className="menu_icon_sec">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </div>
                        <div className="contact_header user_sec d-flex align-items-center">
                          <span>
                            <img
                              src={userIcon}
                              alt="user"
                              className="img-fluid"
                            />
                          </span>
                          {/*<div className="contact_name">
                            <h6><a href="#">Login</a></h6>
                          </div>*/}
                          {isAuthenticated ? (
                          <div className="contact_name">
                            {user?.name == null ? (
                            <>
                               <div className="dropdown">
                                  <Link to="/login">Login</Link>
                                </div>
                              </>
                            ):(
                            <>
                            <div className="dropdown">
                                <Link to="/login">Login</Link>
                              </div>
                            </>
                            )}
                          </div>
                          ):(

                            <div className="contact_name">
                            <div className="dropdown">
                              <Link to="/login">Login</Link>
                            </div>
                            </div>
                          )}
                          <div
                            className="hamberger_menu open"
                            onClick={toggleSidebar}
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
