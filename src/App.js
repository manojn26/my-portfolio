import "./Global.css";
import AboutMe from "./pages/AboutMe/AboutMe";
import Acheivements from "./pages/Achievements/Achievements";
import CurrentLearning from "./pages/CurrenltLearning/CurrentLearning";
import Education from "./pages/Education/Education";
import TopNav from "./pages/Navbar/TopNav";
import ProfileBanner from "./pages/ProfileBanner/ProfileBanner";
import Projects from "./pages/Projects/Projects";
import SideBar from "./pages/SideBar/SideBar";
import Skill from "./pages/Skills/Skill";

function App() {
  return (
    <>
      <section className='navigation-bar'>
        <TopNav />
      </section>
      <section className='content-box'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='main-content'>
          <ProfileBanner />
          <AboutMe />
          <Skill />
          <Education />
          <Projects />
          <Acheivements />
          <CurrentLearning />
        </div>
      </section>
    </>
  );
}

export default App;
