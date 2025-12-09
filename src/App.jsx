import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import FollowupPage from "./pages/FollowupPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-logo">HR Recruiter</div>

        <nav className="app-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Upload
          </NavLink>

          <NavLink to="/admin" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Admin
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/followup/:token" element={<FollowupPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
