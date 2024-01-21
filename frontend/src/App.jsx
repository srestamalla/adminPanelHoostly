import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import AdsManagement from "./pages/adsmanagement";
import CategoryManagement from "./pages/CategoryManagement";
import BannerManagement from "./pages/BannerManagement";
import FeaturedAds from "./pages/FeaturedAds";
import Transaction from "./pages/Transaction";
import Notification from "./pages/Notification";
import AboutUs from "./pages/Pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/Pages/TermsAndConditions";
import PrivacyPolicy from "./pages/Pages/PrivacyPolicy";
import BannerList from "./pages/BannerList";
import AddCategory from "./pages/AddCategory";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/user-management/:userId" element={<UserDetails />} />
          <Route path="/category-management" element={<CategoryManagement />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/ads-management" element={<AdsManagement />} />
          <Route path="/banner-lists" element={<BannerList />} />
          <Route path="/banner-management" element={<BannerManagement />} />
          <Route path="/featured-ads" element={<FeaturedAds />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
