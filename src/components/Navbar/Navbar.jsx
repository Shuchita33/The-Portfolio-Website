import React, { useState } from "react";
import { Bio } from "../../data/constants";
import { MenuRounded } from "@mui/icons-material";
import ghb from '../../assets/ghb.svg';
import lnkd from '../../assets/lnkd.svg';
import lc from '../../assets/lc.svg';
import {
  MobileMenu, MobileIcon, Button, ButtonContainer, 
  NavLink, NavItems, NavLogo, ColorText, Nav
} from './styles';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      
        <NavLogo to="/">
          <ColorText>cout&lt;&lt;"</ColorText>
          Shuchita
          <ColorText>" ;</ColorText>
        </NavLogo>
     
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <Button
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </Button>
          </MobileMenu>
        )}

        <ButtonContainer>
          <a href={Bio.github} target="blank"><Button src={ghb} alt="hii"/></a>
          <a href={Bio.leetcode} target="blank"><Button src={lc} alt="hii"/></a>
          <a href={Bio.linkedin} target="blank"><Button src={lnkd} alt="hii"/></a>      
        </ButtonContainer>
    </Nav>
  );
};

export default Navbar;
