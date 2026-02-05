import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadAuthFromStorage } from "./features/auth/authSlice";
import { loadUserFromStorage } from "./features/user/userSlice";

// Layout
import Header from "./components/comman/Header";
import Footer from "./components/comman/Footer";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import AstrologyCourse from "./pages/AstrologyCourse";
import CourseDetail from "./pages/CourseDetail";
import CourseDetaileNew from "./pages/CourseDetailPage";
import AiAstrologerPage from "./pages/AiAstrologerPage";
import Consultation from "./pages/services/Consultation";
import ConsultationDetails from "./pages/services/ConsultationDetails";
import BuyFullReportsPage from "./pages/services/BuyFullReportsPage";
import FullReportDetailspage from "./pages/services/FullReportDetailsPage";
import PersonalizedReports from "./pages/services/PersonalizedReportsPage";
import MagazinesandBook from "./pages/MagazinesandBook";
import Puja from "./pages/Puja";

// Protected pages
import Wallet from "./pages/WalletPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import SavedProfilePage from "./pages/SavedProfilePage";
import CreateSubUserPage from "./components/profile/CreateSubUserPage";

// Auth & onboarding
import LoginPage from "./pages/auth/LoginPage";
import SigninPage from "./pages/auth/SiginPage";
import VerifyOTPPage from "./pages/auth/VerifyOTPPage";
import UsernamePage from "./pages/auth/UsernamePage";
import UserGenderPage from "./pages/auth/UserGenderPage";
import UserDOBPage from "./pages/auth/UserDOBPage";
import UserTOBPage from "./pages/auth/UserTOBPage";
import UserPlacePage from "./pages/auth/UserPlacePage";
import Welcome from "./pages/auth/Welcome";

import NotFound from "./pages/404/NotFound";

/* ---------------- Protected Route (Redux) ---------------- */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authChecked } = useSelector(
    (state) => state.auth
  );

  if (!authChecked) return null; // loader can be shown here

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const dispatch = useDispatch();
  const { authChecked } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadAuthFromStorage());
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  if (!authChecked) return null; // global loader

  return (
    <Router>
      <Header />

      <Routes>
        {/* -------- Public Routes -------- */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/astrology-course" element={<AstrologyCourse />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/magazines-and-books" element={<MagazinesandBook />} />
        <Route path="/learn-course-details/:id" element={<CourseDetaileNew />} />
        <Route path="/ai-astrologer" element={<AiAstrologerPage />} />
        <Route path="/consultation-list" element={<Consultation />} />
         <Route path="/puja/:id" element={<Puja />} />
        <Route
          path="/consultation-detail/:id"
          element={<ConsultationDetails />}
        />
        <Route path="/buy-full-reports" element={<BuyFullReportsPage />} />
        <Route
          path="/full-reports-details/:id"
          element={<FullReportDetailspage />}
        />
        <Route
          path="/personalized-reports"
          element={<PersonalizedReports />}
        />

        {/* -------- Auth Routes -------- */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/verify" element={<VerifyOTPPage />} />
        <Route path="/ai-astrologer" element={<AiAstrologerPage />} />
        {/* -------- Protected Routes -------- */}
        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-profile"
          element={
            <ProtectedRoute>
              <SavedProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-subuser"
          element={
            <ProtectedRoute>
              <CreateSubUserPage />
            </ProtectedRoute>
          }
        />

        {/* -------- Onboarding -------- */}
        <Route
          path="/username"
          element={
            <ProtectedRoute>
              <UsernamePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-gender"
          element={
            <ProtectedRoute>
              <UserGenderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dob"
          element={
            <ProtectedRoute>
              <UserDOBPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-tob"
          element={
            <ProtectedRoute>
              <UserTOBPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-place"
          element={
            <ProtectedRoute>
              <UserPlacePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />

        {/* -------- 404 -------- */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
