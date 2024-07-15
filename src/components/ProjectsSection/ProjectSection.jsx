import React from "react";
import { projects } from "../../data/constants";
import Projects from "./Projects";
import {
  Container, Wrapper, Title, CardContainer
} from './styles';

const ProjectSection = ({ openModal, setOpenModal }) => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          {projects.map((project) => (
              <Projects
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectSection;
