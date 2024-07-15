import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import{ Top, Image, Body, Role, Company, 
  Date, Description, Span, Skills, Skill, 
  ItemWrapper } from './styles';

const ExpCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#c6bfb190",
        color: "white",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #c6bfb190 ",
      }}
      date={experience.date}
    >
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill) => (
                  <Skill>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExpCard;
