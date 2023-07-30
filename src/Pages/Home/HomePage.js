import "./HomePage.css";
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { Footer } from "../../Components/Footer/Footer";
import { MainSection } from "../../Components/MainSection/MainSection";
import { useEffect } from "react";
import axios from "axios";

function HomePage() {
  return (
    <div className="page-main-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="left-side-bar-container">
        <LeftSidebar />
      </div>

      <div className="main-container">
        <MainSection />
      </div>

      <div className="right-side-bar-container">
        <RightSidebar />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export { HomePage };
