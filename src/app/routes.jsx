import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute, AuthOnlyRoute } from "./guards";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import GrammarExam from "../pages/exems/grammar/GrammarExem";
import ReadingExam from "../pages/exems/reading/ReadingExem";
import WritingExam from "../pages/exems/writing/WritingExem";
import Shop from "../pages/shop/Shop";
import Ranking from "../pages/ranking/Ranking";
import Profile from "../pages/profile/Profile";

import PageWrapper from "../components/layout/PageWrapper";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* AUTH PAGES (NO NAVBAR) */}
      <Route
        path="/login"
        element={
          <AuthOnlyRoute>
            <Login />
          </AuthOnlyRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthOnlyRoute>
            <Register />
          </AuthOnlyRoute>
        }
      />

      {/* APP PAGES (WITH NAVBAR) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <Dashboard />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route
        path="/grammar"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <GrammarExam />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route
        path="/reading"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <ReadingExam />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route
        path="/writing"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <WritingExam />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route
        path="/shop"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <Shop />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route
        path="/ranking"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <Ranking />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <PageWrapper>
              <Profile />
            </PageWrapper>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
