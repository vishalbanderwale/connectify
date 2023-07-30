import MockApi from "../Components/MockMan/MockMan";
import { LoginPage } from "../Pages/Authentication/Login";
import { Signup } from "../Pages/Authentication/Signup";
import { ExplorePage } from "../Pages/ExplorePage/ExplorePage";
import { HomePage } from "../Pages/Home/HomePage";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/explorepage" element={<ExplorePage />} />
      <Route path="/mockman" element={<MockApi />} />
    </Routes>
  );
}

export { Routing };
