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
import ScrollToTop from "./components/ScrollToTop";
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
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import RefundCancellation from "./pages/legal/RefundCancellation";
import ShippingPolicy from "./pages/legal/ShippingPolicy";

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
import Astrologers from "./pages/Astrologers";

import NotFound from "./pages/404/NotFound";
import Horoscope from "./pages/Horoscope";
import PanchangDetail from "./pages/PanchangDetail";
import TransitTimeline from "./pages/TransitTimeline";
import ScrollToHash from "./components/ScrollToHash";
import Onlinepuja from "./pages/Onlinepuja";
import SavedProfile from "./pages/SavedProfilePage";
import { loadSubUserFromStorage } from "./features/subuserslice/subuserSlice";
import Horescopedetail from "./pages/Horescopedetail";
import { setBag } from "./features/bag/bagSlice";
import { setBalance } from "./features/wallet/walletSlice";
import api from "./services/api";
import { setKundali, setVargKundali } from "./features/kundali/kundaliSlice";

/* ---------------- Protected Route (Redux) ---------------- */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authChecked } = useSelector((state) => state.auth);

  // Wait until auth is checked
  if (!authChecked) {
    return <div>Loading...</div>;
  }

  // If not logged in → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → show protected page
  return children;
};
const App = () => {
  const dispatch = useDispatch();
  const { authChecked } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user || {});
  const { selected: selectedSubuser } = useSelector((state) => state.subuser || {});

  useEffect(() => {
    dispatch(loadAuthFromStorage());
    dispatch(loadUserFromStorage());
    dispatch(loadSubUserFromStorage());
  }, [dispatch]);

  // refresh bag and wallet when user or selected subuser changes
  useEffect(() => {
    const fetchBagAndBalance = async () => {
      try {
        const bagRes = await api.get('/v1/myBag/getMyBag');
        const bagPayload = bagRes?.data?.data ?? bagRes?.data ?? null;
        if (bagPayload) dispatch(setBag(bagPayload));
      } catch (e) {
        console.warn('Failed to fetch bag on user change', e);
      }

      try {
        const uid = user?.userId || user?.id || 0;
        const balRes = await api.get(`/v1/wallet/balance?userId=${uid}`);
        const balance = balRes?.data?.data ?? balRes?.data ?? 0;
        dispatch(setBalance(balance));
      } catch (e) {
        console.warn('Failed to fetch balance on user change', e);
      }
    };

    if (user) fetchBagAndBalance();
  }, [user, selectedSubuser, dispatch]);

  // fetch kundali and varg kundali when profile (user or selected subuser) has birth details
  useEffect(() => {
    const profile = selectedSubuser || user;
    console.debug('[Kundali] profile change detected', { user, selectedSubuser });
    if (!profile) return;

    // need birthDateAndTime and birthPlace info
    const hasBirth = profile?.birthDateAndTime && (profile?.birthPlace?.id || profile?.birthPlaceId || profile?.birthPlaceLatitude || profile?.birthPlaceLatitude === 0);
    console.debug('[Kundali] profile hasBirth?', hasBirth, 'profile ->', profile);
    if (!hasBirth) return;

    const normalizeDateTime = (dt) => {
      if (!dt) return dt;
      if (typeof dt !== 'string') dt = String(dt).trim();
      // already in yyyy-MM-dd HH:mm:ss
      if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dt)) return dt;

      // dd/MM/yyyy or dd/MM/yyyy HH:mm[:ss]
      const dmySlash = dt.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{2}:\d{2}(?::\d{2})?))?$/);
      if (dmySlash) {
        const day = String(dmySlash[1]).padStart(2, '0');
        const month = String(dmySlash[2]).padStart(2, '0');
        const year = dmySlash[3];
        let timePart = dmySlash[4] || '00:00:00';
        if (/^\d{2}:\d{2}$/.test(timePart)) timePart = `${timePart}:00`;
        return `${year}-${month}-${day} ${timePart}`;
      }

      // dd-MM-yyyy or dd-MM-yyyy HH:mm[:ss]
      const dmyDash = dt.match(/^(\d{1,2})-(\d{1,2})-(\d{4})(?:\s+(\d{2}:\d{2}(?::\d{2})?))?$/);
      if (dmyDash) {
        const day = String(dmyDash[1]).padStart(2, '0');
        const month = String(dmyDash[2]).padStart(2, '0');
        const year = dmyDash[3];
        let timePart = dmyDash[4] || '00:00:00';
        if (/^\d{2}:\d{2}$/.test(timePart)) timePart = `${timePart}:00`;
        return `${year}-${month}-${day} ${timePart}`;
      }

      // e.g. 2023-September-13 13:11:00
      const m = dt.match(/^(\d{4})-([A-Za-z]+)-(\d{1,2})\s+(\d{2}:\d{2}:\d{2})$/);
      if (m) {
        const year = m[1];
        const monthName = m[2].toLowerCase();
        const day = m[3].padStart(2, '0');
        const timePart = m[4];
        const months = { jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06', jul: '07', aug: '08', sep: '09', sept: '09', september: '09', oct: '10', nov: '11', dec: '12' };
        // try exact and prefix matches
        const monthKey = Object.keys(months).find(k => monthName.startsWith(k)) || '01';
        const mm = months[monthKey];
        return `${year}-${mm}-${day} ${timePart}`;
      }

      // try Date parse fallback
      const d = new Date(dt);
      if (!isNaN(d.getTime())) {
        const y = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const hh = String(d.getHours()).padStart(2, '0');
        const mi = String(d.getMinutes()).padStart(2, '0');
        const ss = String(d.getSeconds()).padStart(2, '0');
        return `${y}-${mm}-${dd} ${hh}:${mi}:${ss}`;
      }

      return dt;
    };

    const normalizeGender = (g) => {
      if (!g) return 'MALE';
      const s = String(g).trim().toUpperCase();
      if (['MALE', 'FEMALE', 'OTHER'].includes(s)) return s;
      if (s.startsWith('M')) return 'MALE';
      if (s.startsWith('F')) return 'FEMALE';
      return 'OTHER';
    };

    const birthDateAndTime = normalizeDateTime(profile?.birthDateAndTime);
    const gender = normalizeGender(profile?.gender || profile?.sex || profile?.genderType);

    const payload = {
      actionInfo: { actionId: "" },
      formData: {
        userId: Number(user?.userId || user?.id || 0),
        subUserId: Number(profile?.subUserId || profile?.id || 0),
        birthPlaceId: Number(profile?.birthPlace?.id ?? profile?.birthPlaceId ?? 187835),
        name: profile?.name || profile?.subUsername || profile?.userName || "",
        gender,
        birthDateAndTime,
        birthPlaceName: profile?.birthPlace?.name || profile?.birthPlaceName || "",
        birthPlaceLatitude: parseFloat(profile?.birthPlace?.latitude ?? profile?.birthPlaceLatitude ?? 0) || 0,
        birthPlaceLongitude: parseFloat(profile?.birthPlace?.longitude ?? profile?.birthPlaceLongitude ?? 0) || 0,
        birthDateAndTimeGmt: profile?.birthDateAndTimeGmt || `${birthDateAndTime} Asia/Kolkata`,
        timezoneId: Number(profile?.birthPlace?.timezone ?? profile?.timezoneId ?? 1),
      },
      sessionData: { userDetails: { isAdmin: 0, isAllAccess: 0, langCode: "en", userEmailId: user?.email || "", userId: user?.userId || user?.id || 0, userName: user?.name || "" } }
    };

    const fetchKundali = async () => {
      try {
        console.debug('[Kundali] requesting kundali with payload', payload);
        const kRes = await api.post('/v1/kundaliCharts/getKundaliDetails', payload);
        console.debug('[Kundali] kundali response', kRes?.data ?? kRes);
        const kData = kRes?.data?.data ?? kRes?.data ?? null;
        if (kData) {
          dispatch(setKundali(kData));
          try { localStorage.setItem('kundaliPayload', JSON.stringify(payload)); } catch(e){}
        } else {
          console.warn('[Kundali] empty kundali data', kRes);
        }
      } catch (e) {
        console.warn('Failed to fetch kundali on profile change', e);
      }

      try {
        const vRes = await api.post('/v1/chart/getVargKundali', payload);
        console.debug('[Kundali] varg response', vRes?.data ?? vRes);
        const vData = vRes?.data?.data ?? vRes?.data ?? null;
        if (vData) dispatch(setVargKundali(vData));
        else console.warn('[Kundali] empty varg kundali data', vRes);
      } catch (e) {
        console.warn('Failed to fetch varg kundali on profile change', e);
      }
    };

    fetchKundali();
  }, [user, selectedSubuser, dispatch]);
  return (
    <Router>
      <ScrollToHash />
      <Header />
      <ScrollToTop />
      <Routes>
        {/* -------- Public Routes -------- */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/astrology-course" element={<AstrologyCourse />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/magazines-and-books" element={<MagazinesandBook />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route
          path="/learn-course-details/:id"
          element={<CourseDetaileNew />}
        />
        <Route path="/ai-astrologer" element={<AiAstrologerPage />} />
        <Route path="/transit-timeline" element={<TransitTimeline />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/detailed-panchang" element={<PanchangDetail />} />
        <Route path="/kundali-result" element={<BuyFullReportsPage />} />
        <Route path="/horoscope/:slug" element={<Horescopedetail />} />
        <Route path="/puja/:id" element={<Puja />} />
        <Route path="/consultation/:slug" element={<ConsultationDetails />} />
        <Route path="/reports" element={<BuyFullReportsPage />} />
        <Route
          path="/full-reports-details/:id"
          element={<FullReportDetailspage />}
        />
        <Route path="/personalized-reports" element={<PersonalizedReports />} />
        <Route path="/online-puja" element={<Onlinepuja />} />
        {/* <Route path="/saved-profiles" element={<Onlinepuja />} /> */}

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
          path="/profile/:id"
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
