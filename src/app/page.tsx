import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import UnderProjects from "../../components/UnderProjects";

export default function Home() {
  return (
    <main className="pt-16">
      <Header />
      <Hero />
      <Projects />
      <UnderProjects/>
      <AboutMe/>
      <Footer/>
    </main>
  );
}
