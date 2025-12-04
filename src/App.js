import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/comman/Header';
import Footer from './components/comman/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import AstrologyCourse from './pages/AstrologyCourse';
import NotFound from "./pages/404/NotFound";
import CourseDetail from "./pages/CourseDetail";
import CourseDetaileNew from "./pages/CourseDetailPage";
import AiAstrologerPage from './pages/AiAstrologerPage';
import BlogDetails from './pages/BlogDetails';
import Consultation from './pages/services/Consultation';
import ConsultationDetails from './pages/services/ConsultationDetails';
import BuyFullReportsPage from './pages/services/BuyFullReportsPage';
import FullReportDetailspage from './pages/services/FullReportDetailsPage';
import PersonalizedReports from './pages/services/PersonalizedReportsPage';
import Wallet from "./pages/WalletPage";
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import SavedProfilePage from './pages/SavedProfilePage';
import CreateSubUserPage from './components/profile/CreateSubUserPage';
import LoginPage from './pages/auth/LoginPage';
import SigninPage from './pages/auth/SiginPage';
import VerifyOTPPage from './pages/auth/VerifyOTPPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/blogs/:id" element={<BlogDetails/>}/>
         <Route path="/astrology-course" element={<AstrologyCourse />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/course-detaile-new" element={<CourseDetaileNew />} />
          <Route path="/ai-astrologer" element={<AiAstrologerPage />} />
          <Route path="/consultation-list" element={<Consultation/>}/>
          <Route path="/consultation-detail/:id" element={<ConsultationDetails/>}/>
          <Route path="/buy-full-reports" element={<BuyFullReportsPage/>}/>
          <Route path="/full-reports-details/:id" element={<FullReportDetailspage/>}/>
          <Route path="/personalized-reports" element={<PersonalizedReports/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/saved-profile" element={<SavedProfilePage/>}/>
          <Route path="/create-subuser" element={<CreateSubUserPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/verify" element={<VerifyOTPPage/>}/>

        {/* Add more routes here, e.g., <Route path="/about" element={<About />} /> */}

         <Route path="*" element={<Navigate to="/404" replace />} />

        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;