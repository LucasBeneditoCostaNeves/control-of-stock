import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
  );
};
