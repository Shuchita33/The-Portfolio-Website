import {useState} from 'react';
import {lightTheme } from './themes/Themes';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Skills from './components/HeroSection/Skills';
import Experience from './components/ExperienceSection/Experience';
import Footer from './components/FooterSection/Footer';
import ProjectSection from './components/ProjectsSection/ProjectSection';
import ProjectDetails from './components/ProjectsSection/ProjectDetails';
import Education from './components/EducationSection/Education';
import Contact from './components/FooterSection/Contact';
const Body = styled.div`
  background-color: ${({ theme }) => theme.primary_lightest};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 7vh;
  width: 100%;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>               
            <div>
            <Hero />
            <Wrapper>
                <Skills />
                <Experience/>
            </Wrapper>
            <ProjectSection openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
                <Education />
                <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>         
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
