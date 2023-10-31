import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Header/navbar";
import HeroSection from "./body/heroSection";
import ContentCard from "./body/ContentCard";
import JobDetail from "./body/jobDetail";
import Slider from "./body/slider";
import Footer from "./footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Slider /> */}
          <Route path="/" element={[<HeroSection />, <ContentCard />]} />
          <Route path="/job-detail/:userId" element={<JobDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
