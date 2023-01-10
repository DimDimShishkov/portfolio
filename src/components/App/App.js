import { useState } from "react";
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

  function closeAllPopups() {
    setCurrentProject({});
  }

  return (
    <div className={`page ${currentProject.title && "page_active"}`}>
      <Header
        setIsStartPage={setIsStartPage}
        setIsProjectPage={setIsProjectPage}
        setIsExpPage={setIsExpPage}
        setIsSandboxPage={setIsSandboxPage}
      />
      {isStartPage && <Main />}
      {isProjectPage && <Projects setCurrentProject={setCurrentProject} />}
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
