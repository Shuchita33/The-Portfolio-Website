import React from "react";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterContainer, FooterWrapper, Nav, NavLink, 
  SocialMediaIcons, SocialMediaIcon, Message }from './styles';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Message>Made with <span style={{fontSize:'3vh'}}>&#9829;</span> by Shuchita.</Message>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
