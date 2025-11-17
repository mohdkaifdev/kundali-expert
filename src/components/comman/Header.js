import React, { useEffect, useState } from "react";

// ✅ Import all images from assets/images
import logo from "../../assets/images/logo.png";
import mailIcon from "../../assets/images/mail_icon.png";
import callIcon from "../../assets/images/call_icon.png";
import cartIcon from "../../assets/images/cart_icon.png";
import userIcon from "../../assets/images/user_icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= Desktop View Header ================= */}
      <header  className={`header-area desktop_view ${isSticky ? "fixed_header" : ""}`}>
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
                        <a href="mailto:info@email.com">info@email.com</a>
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
                        <a href="tel:+918468920394">+91 846 8920394</a>
                      </h6>
                    </div>
                  </div>

                  <div className="contact_header border d-flex align-items-center">
                    <span className="h_contact">
                      <img src={cartIcon} alt="cart" className="img-fluid" />
                    </span>
                    <div className="contact_name">
                      <h6 className="cost">
                         <Link to='/wallet'>
                          <span className="d-block">Cart</span> ₹120.00
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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li className="menu-item-has-children"><a href="#">Services</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><Link to="/consultation-list">Consultation</Link></li>
                                    <li><Link to="/buy-full-reports">Full Reports</Link></li>
                                    <li><Link to="/personalized-reports">Personalized Reports</Link></li>
                                </ul>
                            </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li><Link to="/astrology-course">Astrology Course</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                 <li className="menu-item-has-children"><a href="#">Language</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">हिंदी</a></li>
                                    <li><a href="#">मराठी</a></li>
                                    <li><a href="#">ગુજરાતી</a></li>
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
                <span><img src={userIcon} alt="user" className="img-fluid" /></span>
               {/* <div className="contact_name">
                  <h6><a href="#">Login</a></h6>
                </div> */}
                <div className="contact_name">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/my-order">My Order</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></Link></li>
                                </ul>
                            </div>
                        </div>
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
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li className="menu-item-has-children"><Link to="#">Services</Link>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><Link to="/consultation_list">Consultation</Link></li>
                                    <li><Link to="/buy_full_reports">Full Reports</Link></li>
                                    <li><Link to="/personalized_reports">Personalized Reports</Link></li>
                                </ul>
                            </li>
                      <li><Link to="#">Shop</Link></li>
                      <li><Link to="#">Astrology Course</Link></li>
                      <li><Link to="#">Blog</Link></li>
                      <li className="menu-item-has-children"><a href="#">Language</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">हिंदी</a></li>
                                    <li><a href="#">मराठी</a></li>
                                    <li><a href="#">ગુજરાતી</a></li>
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
                    <span><img src={userIcon} alt="user" className="img-fluid" /></span>
                    {/*<div className="contact_name">
                      <h6><a href="#">Login</a></h6>
                    </div>*/}
                    <div className="contact_name">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">My Order</Link></li>
                                    <li><Link className="dropdown-item" to="#">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ================= Mobile View Header ================= */}
      <header  className={`header-area mob_view ${isSticky ? "fixed_header" : ""}`}>
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
                      <a href="mailto:info@email.com">
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
                        <Link to='/wallet'>
                          <span className="d-block">Cart</span> ₹120.00
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li className="menu-item-has-children"><a href="#">Services</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><Link to="consultation_list">Consultation</Link></li>
                                    <li><Link to="buy_full_reports">Full Reports</Link></li>
                                    <li><Link to="personalized_reports">Personalized Reports</Link></li>
                                </ul>
                            </li>
                        <li><Link to="#">Shop</Link></li>
                        <li><Link to="#">Astrology Course</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li className="menu-item-has-children"><a href="#">Language</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">हिंदी</a></li>
                                    <li><a href="#">मराठी</a></li>
                                    <li><a href="#">ગુજરાતી</a></li>
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
                      <span><img src={userIcon} alt="user" className="img-fluid" /></span>
                      {/*<div className="contact_name">
                        <h6><a href="#">Login</a></h6>
                      </div>*/}
                      <div className="contact_name">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/my-order">My Order</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* ----- Sticky Header (Mobile) ----- */}
                  <nav className={`main-nav bottom-nav sticky_menu ${isSticky ? "active" : ""}`}>
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                             <li className="menu-item-has-children"><a href="#">Services</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><Link to="/consultation_list">Consultation</Link></li>
                                    <li><Link to="/buy_full_reports">Full Reports</Link></li>
                                    <li><Link to="/personalized_reports">Personalized Reports</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/astrology-course">Astrology Course</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li className="menu-item-has-children"><a href="#">Language</a>
                                <i className="fa-solid fa-angle-down"></i>
                                <ul className="sub-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">हिंदी</a></li>
                                    <li><a href="#">मराठी</a></li>
                                    <li><a href="#">ગુજરાતી</a></li>
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
                          <span><img src={userIcon} alt="user" className="img-fluid" /></span>
                          {/*<div className="contact_name">
                            <h6><a href="#">Login</a></h6>
                          </div>*/}
                          <div className="contact_name">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/my-order">My Order</Link></li>
                                    <li><Link className="dropdown-item" to="/logout">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></Link></li>
                                </ul>
                            </div>
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
    </>
  );
};

export default Header;
