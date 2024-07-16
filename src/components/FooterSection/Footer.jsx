import React from "react";
import { Bio } from "../../data/constants";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterContainer, FooterWrapper, Nav, NavLink, 
  SocialMediaIcon, Message }from './styles';


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
          
        <Message>Made with  <span style={{fontSize:'3vh',marginLeft:'1vh',marginRight:'1vh'}}>  &#9829;  </span> by Shuchita.
        <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </Message>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
