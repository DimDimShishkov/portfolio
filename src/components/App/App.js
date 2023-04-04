import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Experience from "../Experience/Experience";
import { Feedback } from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import Main from "../Main/Main";
import { PopupProject } from "../Popup/PopupProject/PopupProject";
import Projects from "../Projects/Projects";
import Sandbox from "../Sandbox/Sandbox";
import "./App.css";
// import { BoardGame } from "../Games/BoardGame/BoardGame";

const App = () => {
  const [currentProject, setCurrentProject] = useState({});
  const [isPageBlock, setPageBlock] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  function closeAllPopups() {
    setCurrentProject({});
    setPageBlock(false);
  }

  function handleSetCurrentProject(project) {
    setCurrentProject(project);
    setPageBlock(true);
  }

  function handleScrollHeight() {
    setScrollHeight(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollHeight);
    return () => window.removeEventListener("scroll", handleScrollHeight);
  }, []);

  useEffect(() => {
    isPageBlock
      ? document.body.classList.add("body_active")
      : document.body.classList.remove("body_active");
  }, [isPageBlock]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`page ${isPageBlock && "page_active"}`}>
      <Header setPageBlock={setPageBlock} />
      <Main id="main" />
      <Projects id="projects" setCurrentProject={handleSetCurrentProject} />
      <Experience id="experience" />
      {/* {isSandboxPage && <Sandbox />} */}
      <Feedback />
      <Footer scrollToTop={scrollToTop} />
      {/* <BoardGame /> */}
      {currentProject.title && (
        <PopupProject project={currentProject} onClose={closeAllPopups} />
      )}
    </div>
  );
};

export default App;
