import AboutSection from "./components/aboutSection";
import CoursesSection from "./components/courseSection";
import FeaturesSection from "./components/featureSection";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    
      <>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturesSection/>
      <CoursesSection/>
      <AboutSection/>
      <Footer></Footer>
      </>
  );
}
