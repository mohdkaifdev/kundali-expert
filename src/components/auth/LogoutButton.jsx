import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const LogoutButton = ({ closeSidebar }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
        if (closeSidebar) {
        closeSidebar();
      }
      dispatch(logout());  
      window.location.reload();
    }
  };
    return(
        <>
            <li >
                <summary><a href="#" onClick={handleLogout}>Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></a></summary>
            </li>
            
        </>
    )
}
export default LogoutButton;