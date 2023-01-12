import { useEffect, useState } from "react";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import Main from "../Main/Main";
import { PopupProject } from "../Popup/PopupProject/PopupProject";
import Projects from "../Projects/Projects";
import Sandbox from "../Sandbox/Sandbox";
import "./App.css";

const App = () => {
  const [isStartPage, setIsStartPage] = useState(true);
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [isExpPage, setIsExpPage] = useState(false);
  const [isSandboxPage, setIsSandboxPage] = useState(false);
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

  return (
    <div className={`page ${isPageBlock && "page_active"}`}>
      <Header
        setIsStartPage={setIsStartPage}
        setIsProjectPage={setIsProjectPage}
        setIsExpPage={setIsExpPage}
        setIsSandboxPage={setIsSandboxPage}
        setPageBlock={setPageBlock}
      />
      {isStartPage && <Main />}
      {isProjectPage && (
        <Projects setCurrentProject={handleSetCurrentProject} />
      )}
      {isExpPage && <Experience />}
      {isSandboxPage && <Sandbox />}

      <Footer />
      {currentProject.title && (
        <PopupProject project={currentProject} onClose={closeAllPopups} />
      )}
    </div>
  );
};

export default App;
