import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./page/landing";
import LoginPage from "./page/loginPage";

import AdminAcademicYearPage from "./page/admin/AdminAcademicYearPage";
import AdminAssignmentPage from "./page/admin/AdminAssignmentPage";
import AdminClassesPage from "./page/admin/AdminClassesPage";
import AdminDashboard from "./page/admin/AdminDashboard";
import AdminMajorPage from "./page/admin/AdminMajorPage";
import AdminManagementPage from "./page/admin/AdminManagementPage";
import AdminStudentsPage from "./page/admin/AdminStudentsPage";
import AdminSubjectPage from "./page/admin/AdminSubjectPage";
import AdminTeachersPage from "./page/admin/AdminTeachersPage";

const App = () => {
  return (
    <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/academic-year" element={<AdminAcademicYearPage />} />
          <Route path="/admin/teachers" element={<AdminTeachersPage />} />
          <Route path="/admin/students" element={<AdminStudentsPage />} />
          <Route path="/admin/assignment" element={<AdminAssignmentPage />} />
          <Route path="/admin/classes" element={<AdminClassesPage />} />
          <Route path="/admin/major" element={<AdminMajorPage />} />
          <Route path="/admin/manage-admin" element={<AdminManagementPage />} />
          <Route path="/admin/subject" element={<AdminSubjectPage />} />

          {/* Fallback */}
        <Route path="*" element={<div className="text-white bg-gray-950 min-h-screen flex items-center justify-center">404 - Page Not Found</div>} />
        </Routes>
    </Router>
  );
};

export default App;
