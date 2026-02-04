import react from "react";
import ariesImg from "../../assets/images/aries_img.webp";
import LogoutButton from "../../components/auth/LogoutButton";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Sidebar = ({isOpen, closeSidebar}) => {
    const { user, isAuthenticated } = useSelector((state) => state.auth || {});
    const displayName = user?.name || 'Guest';
    const displayEmail = user?.email || 'Guest Email';
    return(
        <>
        <div className={`sidebar_block ${isOpen ? "open":""}`}>
            <div className="sidebar_overlay" onClick={closeSidebar}></div>
                <div className="hamberger_menu close ms-0" onClick={closeSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="sidebar_inner">
                    {isAuthenticated && (
                        <>
                            <span>

                                <img src={ariesImg} alt="icon" className="img-fluid"/>
                            </span>
                            <div className="info_sec">
                                <h4 className="mb-2">{displayName}</h4>
                                <p>{displayEmail}</p>
                                {isAuthenticated && (
                                <h6>Edit Profile <i className="fa-solid fa-angle-right ps-1"></i></h6>
                                )}
                            </div>
                        </>
                    )}
                    <nav>
                        <ul className="menu_navigation mt-4">
                            {isAuthenticated && (
                            <>
                            <li>
                                <summary><Link to="/profile">Profile</Link></summary>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>User Kundali  <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><a href="javascript:void(0)"><span>Date: 06/11/2025</span><span>Time: 16:56:00</span><span>Place: Ram Nagar, Sector 8, Gurugram, Haryana </span><span>77°01'24"E | 28°27'27"N</span></a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <summary><a href="#">My Orders</a></summary>
                            </li>
                            <li>
                                <summary><a href="savedprofile.php">Saved Profiles</a></summary>
                            </li>
                            <li>
                                <summary><a href="savedkundalis.php">Edit Kundali</a></summary>
                            </li>
                                </>
                                )}
                            
                            
                            <li>
                                <details className="dropdown">
                                    <summary>Kundali <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><a href="kundali.php">Kundali</a></li>
                                        <li><a href="dasha_chakras.php">Dasha & Chakras</a></li>
                                        <li><a href="#">Kundali</a></li>
                                        <li><a href="#">Basic Details</a></li>
                                        <li><a href="#">Avakhada Chakras</a></li>
                                        <li><a href="#">Ghatchakra</a></li>
                                        <li><a href="#">Astro Details</a></li>
                                        <li><a href="#">Janam Panchang Details</a></li>
                                        <li><a href="#">Shadbal</a></li>
                                        <li><a href="#">House Strength</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>Match Making <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><a href="#">Summary</a></li>
                                        <li><a href="#">Basic Details</a></li>
                                        <li><a href="#">Dashakoot Report</a></li>
                                        <li><a href="#">Rajju Dosha</a></li>
                                        <li><a href="#">Bhakoot Dosha</a></li>
                                        <li><a href="#">Nadi Dosha</a></li>
                                        <li><a href="#">Vedh Dosha</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <summary><a href="#">Numerology</a></summary>
                            </li>
                            <li>
                                <summary><a href="#">Yog-DurYog</a></summary>
                            </li>
                            <li>
                                <summary><a href="#">Astro Clock</a></summary>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>Reports <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><a href="#">Full Reports</a></li>
                                        <li><a href="#">Personalized Reports</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>Consultation <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><a href="#">SuBasic Analysis</a></li>
                                        <li><a href="#">Full Analysis</a></li>
                                        <li><a href="#">Advance Analysismmary</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <summary><a href="#">Online Puja</a></summary>
                            </li>
                           {isAuthenticated && (
                            <LogoutButton closeSidebar={closeSidebar} />
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
export default Sidebar;