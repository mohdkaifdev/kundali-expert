import react from "react";
import ariesImg from "../../assets/images/aries_img.webp";
import LogoutButton from "../../components/auth/LogoutButton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUserFromStorage } from "../../features/user/userSlice";
import { loadAuthFromStorage } from "../../features/auth/authSlice";
import { useEffect } from "react";

const Sidebar = ({isOpen, closeSidebar}) => {
     const dispatch = useDispatch();
   const {authChecked } = useSelector((state) => state.auth || {});
 

     // Add more state for forms
        const user = useSelector(
        (state) => state.user.user
      );
      
        console.log(user,authChecked)
    
      useEffect(()=>{
        dispatch(loadAuthFromStorage());
         dispatch(loadUserFromStorage());
      },[dispatch])
         const displayName = user?.name || 'Guest';
    const displayEmail = user?.email || 'Guest Email';
  
    const onNavClick = (e) => {
        try {
            const anchor = e.target.closest && e.target.closest('a');
            if (!anchor) return;
            // allow anchors with href that aren't javascript:void(0)
            const href = anchor.getAttribute('href');
            if (!href) return;
            if (href.includes('javascript:void(0)')) return;
            // close sidebar and scroll to top
            if (typeof closeSidebar === 'function') closeSidebar();
            if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch (err) {
            // ignore
        }
    };
    
 
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
                    {authChecked && (
                        <>
                            <span>

                                <img src={ariesImg} alt="icon" className="img-fluid"/>
                            </span>
                            <div className="info_sec">
                                <h4 className="mb-2">{displayName}</h4>
                                <p>{displayEmail}</p>
                                {/* {authChecked && (
                                <h6>Edit Profile <i className="fa-solid fa-angle-right ps-1"></i></h6>
                                )} */}
                            </div>
                        </>
                    )}
                    <nav onClick={onNavClick}>
                        <ul className="menu_navigation mt-4">
                            {authChecked && (
                            <>
                            <li>
                                <summary><Link to="/profile">Profile</Link></summary>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>User Kundali  <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><Link to="javascript:void(0)"><span>Date and TIme: {user?.birthDateAndTime}</span><span>Place: {user?.birthPlace?.name}</span><span>{user?.birthPlace?.latitude} | {user?.birthPlace?.longitudes}</span></Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <summary><Link to="#">My Orders</Link></summary>
                            </li>
                            <li>
                                <summary><Link to="/saved-profile">Saved Profiles</Link></summary>
                            </li>
                            <li>
                                <summary><Link to="savedkundalis.php">Edit Kundali</Link></summary>
                            </li>
                                </>
                                )}
                            <li>
                                <details className="dropdown">
                                    <summary>Kundali <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><Link to="kundali.php">Kundali</Link></li>
                                        <li><Link to="dasha_chakras.php">Dasha & Chakras</Link></li>
                                        <li><Link to="#">Kundali</Link></li>
                                        <li><Link to="#">Basic Details</Link></li>
                                        <li><Link to="#">Avakhada Chakras</Link></li>
                                        <li><Link to="#">Ghatchakra</Link></li>
                                        <li><Link to="#">Astro Details</Link></li>
                                        <li><Link to="#">Janam Panchang Details</Link></li>
                                        <li><Link to="#">Shadbal</Link></li>
                                        <li><Link to="#">House Strength</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>Match Making <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><Link to="#">Summary</Link></li>
                                        <li><Link to="#">Basic Details</Link></li>
                                        <li><Link to="#">Dashakoot Report</Link></li>
                                        <li><Link to="#">Rajju Dosha</Link></li>
                                        <li><Link to="#">Bhakoot Dosha</Link></li>
                                        <li><Link to="#">Nadi Dosha</Link></li>
                                        <li><Link to="#">Vedh Dosha</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <summary><Link to="#">Numerology</Link></summary>
                            </li>
                            <li>
                                <summary><Link to="#">Yog-DurYog</Link></summary>
                            </li>
                            <li>
                                <summary><Link to="#">Astro Clock</Link></summary>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>Reports <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><Link to="/reports">Full Reports</Link></li>
                                        <li><Link to="/personalized-reports">Personalized Reports</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="dropdown">
                                    <summary>Consultation <i className="fa-solid fa-angle-right ps-1"></i></summary>
                                    <ul>
                                        <li><Link to="/consultation/1">SuBasic Analysis</Link></li>
                                        <li><Link to="/consultation/2">Full Analysis</Link></li>
                                        <li><Link to="/consultation/3">Advance Analysismmary</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <summary><Link to="/online-puja">Online Puja</Link></summary>
                            </li>
                           {authChecked && (
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