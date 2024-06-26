import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import SkillsMobile from "./components/about/SkillsMobile";
const App = () => {
  const width = window.innerWidth;

  return (
    <div>
      {/* <Cursor/> */}
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section > <Parallax/> </section>
      <section id="About"> <About/> </section>
      {width<768 && <section style={{ background: 'linear-gradient(180deg, #000000, #17172e)' }}><SkillsMobile width={width}/></section>}
      {/* <Portfolio/>
      <section id="Contact"> 
      <Contact/>
      </section>
       */}
    </div>
  );
};

export default App;
