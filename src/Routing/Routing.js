import MockApi from "../Components/MockMan/MockMan";
import { LoginPage } from "../Pages/Authentication/Login";
import { Signup } from "../Pages/Authentication/Signup";
import { ExplorePage } from "../Pages/ExplorePage/ExplorePage";
import { HomePage } from "../Pages/Home/HomePage";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { ThirdPersonProfilePage } from "../Pages/ThirdPersonProfilePage/ThirdPersonProfile";
import { BookmarkPage } from "../Pages/BookmarkPage/BookmarkPage";
import { MyProfilePage } from "../Pages/MyProfilePage/MyProfilePage";
import { SinglePost } from "../Pages/SinglePostPage/SinglePostPage";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/explorepage" element={<ExplorePage />} />
      <Route path="/bookmarkpage" element={<BookmarkPage />} />
      <Route path="/profile/:username" element={<ThirdPersonProfilePage />} />
      <Route path="/mockman" element={<MockApi />} />
      <Route path="/myprofile" element={<MyProfilePage />} />
      <Route path="/home/:singlePostId" element={<SinglePost />} />
    </Routes>
  );
}

export { Routing };
