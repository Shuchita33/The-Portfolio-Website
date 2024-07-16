import styled from "styled-components";
const FooterContainer = styled.div`
background: ${({ theme }) => theme.bg};
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh;
  color: ${({ theme }) => theme.white};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 2vh;
  }
`;

const NavLink = styled.a`
  color:white;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.black};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  color: ${({ theme }) => theme.black};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

const Message = styled.p`
  display:flex; justify-content:space-around;
  align-items:center;
  font-size: 1em;
  color: ${({ theme }) => theme.black_light};
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0px;
    flex-direction:column;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
  font-weight: 600;
  margin-top: 3vh;
  color: ${({ theme }) => theme.black_light};
  @media (max-width: 768px) {
    margin-top: 2vh;
    font-size: 2em;
  }
`;

const ContactForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  background:${({ theme }) => theme.primary_light};
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 3vh;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.slight_white};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: #c6bfb190;
  border: 1px solid ${({ theme }) => theme.black_light};
  outline: none;
  font-size: 1em;
  color: ${({ theme }) => theme.black_light};
  border-radius: 12px;
  padding: 1vh;
  &:focus {
    border: 1px solid ${({ theme }) => theme.white};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: #c6bfb190;
  border: 1px solid ${({ theme }) => theme.black_light};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.black_light};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.white};
  }
`;
const ContactButton = styled.input`
    text-decoration: none;
    margin: 7px;
    background: #cfc1a4;
    color: white;
    font-size: 1em;
    font-weight: 500;
    padding: 0.5vh;
    transition: 0.3s;
    border-radius: 4vh;
    width: 30%;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.gray_dark};
        border-radius:4vh;
        box-shadow: 0 0 5px ${({ theme }) => theme.gray_dark};
    }
`;

export { FooterContainer, FooterWrapper, Nav, NavLink, 
    SocialMediaIcon, Message,
    Container, Wrapper, Title,
    ContactForm,
    ContactTitle,
    ContactInput,
    ContactInputMessage,
    ContactButton };
