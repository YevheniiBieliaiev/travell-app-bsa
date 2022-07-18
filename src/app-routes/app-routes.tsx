import { Route, Routes, Navigate } from "react-router-dom";
import { configs } from "../configs";
import { HomePage, SignInPage, SignUpPage, BookingsPage, TripPage } from "../pages";

export function AppRoutes(isAuthenticated: boolean) {
  return (
    !isAuthenticated ?
      <Routes>
        <Route path={configs.paths.home} element={<HomePage />} />
        <Route path={configs.paths.signup} element={<SignUpPage />} />
        <Route path={configs.paths.signin} element={<SignInPage />} />
        <Route path={`${configs.paths.trip}tripId`} element={<TripPage />} />
        <Route path="*" element={<Navigate to={configs.paths.home} />} />
      </Routes>
      :
      <Routes>
        <Route path={configs.paths.home} element={<HomePage />} />
        <Route path={configs.paths.bookings} element={<BookingsPage />} />
        <Route path={`${configs.paths.trip}tripId`} element={<TripPage />} />
        <Route path="*" element={<Navigate to={configs.paths.home} />} />
      </Routes>
  )
}