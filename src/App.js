import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/comman/Header";
import Footer from "./components/comman/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import AstrologyCourse from "./pages/AstrologyCourse";
import NotFound from "./pages/404/NotFound";
import CourseDetail from "./pages/CourseDetail";
import CourseDetaileNew from "./pages/CourseDetailPage";
import AiAstrologerPage from "./pages/AiAstrologerPage";
import BlogDetails from "./pages/BlogDetails";
import Consultation from "./pages/services/Consultation";
import ConsultationDetails from "./pages/services/ConsultationDetails";
import BuyFullReportsPage from "./pages/services/BuyFullReportsPage";
import FullReportDetailspage from "./pages/services/FullReportDetailsPage";
import PersonalizedReports from "./pages/services/PersonalizedReportsPage";
import Wallet from "./pages/WalletPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import SavedProfilePage from "./pages/SavedProfilePage";
import CreateSubUserPage from "./components/profile/CreateSubUserPage";

import LoginPage from "./pages/auth/LoginPage";
import SigninPage from "./pages/auth/SiginPage";
import VerifyOTPPage from "./pages/auth/VerifyOTPPage";
import UsernamePage from "./pages/auth/UsernamePage";
import UserGenderPage from "./pages/auth/UserGenderPage";
import UserDOBPage from "./pages/auth/UserDOBPage";
import UserTOBPage from "./pages/auth/UserTOBPage";
import UserPlacePage from "./pages/auth/UserPlacePage";
import Welcome from "./pages/auth/Welcome";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initial check + future changes ke liye listener
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    // Pehli baar check
    checkAuth();

    // Agar kahi aur se localStorage change ho (jaise login/logout), toh update ho
    window.addEventListener("storage", checkAuth);

    // Custom event bhi listen kar sakte ho agar chaaho (optional)
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  // Optional: Har render pe check (extra safety, usually not needed)
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setIsAuthenticated(!!token);
  // });

  const authenticatedRoutes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/astrology-course" element={<AstrologyCourse />} />
      <Route path="/course-detail" element={<CourseDetail />} />
      <Route path="/course-detaile-new" element={<CourseDetaileNew />} />
      <Route path="/ai-astrologer" element={<AiAstrologerPage />} />
      <Route path="/consultation-list" element={<Consultation />} />
      <Route
        path="/consultation-detail/:id"
        element={<ConsultationDetails />}
      />
      <Route path="/buy-full-reports" element={<BuyFullReportsPage />} />
      <Route
        path="/full-reports-details/:id"
        element={<FullReportDetailspage />}
      />
      <Route path="/personalized-reports" element={<PersonalizedReports />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/saved-profile" element={<SavedProfilePage />} />
      <Route path="/create-subuser" element={<CreateSubUserPage />} />

      {/* Onboarding/Profile Setup Routes - sirf logged in user ke liye */}
      <Route path="/username" element={<UsernamePage />} />
      <Route path="/user-gender" element={<UserGenderPage />} />
      <Route path="/user-dob" element={<UserDOBPage />} />
      <Route path="/user-tob" element={<UserTOBPage />} />
      <Route path="/user-place" element={<UserPlacePage />} />
      <Route path="/welcome" element={<Welcome />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </>
  );

  const guestRoutes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/astrology-course" element={<AstrologyCourse />} />
      <Route path="/course-detail" element={<CourseDetail />} />
      <Route path="/course-detaile-new" element={<CourseDetaileNew />} />
      <Route path="/ai-astrologer" element={<AiAstrologerPage />} />
      <Route path="/consultation-list" element={<Consultation />} />
      <Route
        path="/consultation-detail/:id"
        element={<ConsultationDetails />}
      />
      <Route path="/buy-full-reports" element={<BuyFullReportsPage />} />
      <Route
        path="/full-reports-details/:id"
        element={<FullReportDetailspage />}
      />
      <Route path="/personalized-reports" element={<PersonalizedReports />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/saved-profile" element={<SavedProfilePage />} />
      <Route path="/create-subuser" element={<CreateSubUserPage />} />
      <Route path="/username" element={<UsernamePage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/verify" element={<VerifyOTPPage />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </>
  );

  return (
    <>
      <Router>
        <Header />{" "}
        {/* Header ab dynamically update hoga kyuki parent re-render hoga */}
        <Routes>{isAuthenticated ? authenticatedRoutes : guestRoutes}</Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
