import React from "react";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
  } from '../../motion/motion';
import ProfilePic from '../../assets/propic.jpg';
import {HeroContainer, Img, ResumeButton, SubTitle, Span, TextLoop, Title, 
        HeroRightContainer,HeroLeftContainer, HeroInnerContainer,
  } from './styles';

const Hero = () => {
    return (
      <div id="About">
        <HeroContainer>
          <motion.div {...headContainerAnimation}>
            <HeroInnerContainer>
              <HeroLeftContainer>
                <motion.div {...headTextAnimation}>
                  <Title>
                    Welcome, I am <br /> {Bio.name}
                  </Title>
                  <TextLoop>
                   A
                    <Span>
                      <Typewriter
                        options={{
                          strings: Bio.roles,
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </Span>
                  </TextLoop>
                </motion.div>
  
                <motion.div {...headContentAnimation}>
                  <SubTitle>{Bio.description}</SubTitle>
                </motion.div>
  
                <ResumeButton href={Bio.resume} target="_blank">
                  Check Resume
                </ResumeButton>
              </HeroLeftContainer>
              <HeroRightContainer>
                <motion.div {...headContentAnimation}>
                  <Tilt  options={{ scale: 1 }}>
                    <Img src={ProfilePic} alt="shuchita" />
                  </Tilt>
                </motion.div>
              </HeroRightContainer>
            </HeroInnerContainer>
          </motion.div>
        </HeroContainer>
      </div>
    );
  };
  
  export default Hero;