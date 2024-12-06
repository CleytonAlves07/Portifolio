"use client";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import IconCarousel from "./components/IconCarousel";
import Recommendations from "./components/Recommendations";
// import ParallaxSection from "./components/ParallaxSection";

import projects from "./data/projects";
import recommendations from "./data/recommendations";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* <ParallaxSection /> */}
      <Header />
      <IconCarousel />
      <main className="flex min-h-screen flex-col">
        <Projects projects={projects} />
        <Services />
        <About />
        <Recommendations recommendations={recommendations} />
      </main>
      <Footer />
    </div>
  );
}

// const [activeTab, setActiveTab] = useState("projects");
// <div className="min-h-screen bg-black text-white">
//   <Navigation />
//   <Header />
//   <IconCarousel />
//   <main className="container mx-auto px-4 py-8">
//     {activeTab === "projects" && <Projects projects={projects} />}
//     {activeTab === "services" && <Services services={services} />}
//     {activeTab === "about" && <About />}
//     {activeTab === "testimonials" && (
//       <Testimonials testimonials={testimonials} />
//     )}
//   </main>
//   <Footer />
// </div>
