import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  position: sticky;
  display: flex; 
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;
  z-index: 10;
  box-shadow: 0 0 5px #0006;
`;

const ColorText = styled.div`
  color: ${({ theme }) => theme.gray_dark};
  font-size: 1em;
`;

const NavbarContainer = styled.div`
  width: 30%;
  padding: 0 3vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #2e2e2e;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 1.5em;
  text-decoration: none;
  color: white;
`;

const NavItems = styled.ul`
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  list-style: none;
  width: 40%; /* Adjust width ratio */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

const ButtonContainer = styled.div`
  width: 20%;
  height: 100%;
  padding: 0 6px;
  display: flex; 
  align-items: center; 
  justify-content: start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.img`
  margin:2vh;
  height:3.5vh; width:3.5vh;
  border-radius:50%;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.gray_light};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  list-style: none;
  background: ${({ theme }) => theme.primary_light};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => isOpen ? "100%" : "0"};
  z-index: ${({ isOpen }) => isOpen ? "1000" : "-1000"};
`;

export {
  Nav,
  ColorText,
  NavbarContainer,
  NavLogo,
  NavItems,
  NavLink,
  ButtonContainer,
  Button,
  MobileIcon,
  MobileMenu
};
