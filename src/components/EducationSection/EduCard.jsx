import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {Top, Span, Image, Body, Name, Grade, Degree, Description, Date} from './styles';

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
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
      date={education.date}
    >
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade :</b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
