import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { clearSubUser } from "../../features/subuserslice/subuserSlice";
import { clearUser } from "../../features/user/userSlice";

const LogoutButton = ({ closeSidebar }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
        if (closeSidebar) {
        closeSidebar();
      }
       localStorage.clear();
      dispatch(logout()); 
      dispatch(clearSubUser()); 
      dispatch(clearUser());  
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