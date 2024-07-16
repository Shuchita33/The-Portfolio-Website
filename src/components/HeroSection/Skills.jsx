import React from "react";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import {Container, SkillsContainer, Skill, SkillTitle, 
  SkillList, SkillItem, SkillImage} from './styles';

const Skills = () => {
  return (
    <Container id="Skills">    
        <SkillsContainer>
          {skills.map((skill, index) => (
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <Tilt options={{ scale: 1 }}>
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                    </Tilt>
                  ))}
                </SkillList>
              </Skill>
          ))}
        </SkillsContainer>    
    </Container>
  );
};

export default Skills;
