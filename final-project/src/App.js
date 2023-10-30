import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Header/navbar";
import HeroSection from "./body/heroSection";
import ContentCard from "./body/ContentCard";
import Slider from "./body/slider";

function App() {
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <HeroSection />
      <ContentCard />
    </>
  );
}

export default App;
