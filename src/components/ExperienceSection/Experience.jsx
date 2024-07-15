import React from "react";
import { experiences } from '../../data/constants';
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExpCard from "./ExpCard";
import { Container, Wrapper, Desc, Title } from "./styles";

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a B.Tech student.
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExpCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
