import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10vh 5vh;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 4vh 2vh;
  }

  @media (max-width: 640px) {
    padding: 3vh 1vh;
  }
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 2;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  justify-content: start;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 5vh;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 3em;
  color: ${({ theme }) => theme.black_light};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.gray_dark};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.gray_dark};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 4vh;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.black_light};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton=styled.a`
    text-decoration:none;
    margin:7px;
    background:${({ theme }) => theme.gray_dark};
    color: white;
    font-size: 1em;
    font-weight: 500;
    padding: 1vh;
    transition: 0.3s;
    border-radius:4vh;
    width: 50%;
    cursor:pointer;
    &:hover {
        background: ${({ theme }) => theme.gray_dark};
        border-radius:4vh;
        box-shadow: 0 0 5px ${({ theme }) => theme.gray_dark};
      }
`
const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.black_light};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content-center;
  z-index: 1;
  align-items: center;
  `;
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  display:flex; flex-direction:row;
  margin-top: 20px;
  gap: 3vh;
  justify-content: center;
`;
const Skill = styled.div`
  width: 80%;
  background:${({ theme }) => theme.primary_light};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 2vh;
  padding: 2vh 3vh;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.black};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vh;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  background:${({ theme }) => theme.primary_lightest};
  color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.black_light};
  border-radius: 1vh;
  padding: 8px 12px;
  margin-top:1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 4vh;
  height: 4vh;
`;
export {
  HeroContainer, Img, 
  ResumeButton, 
  SubTitle, Span, 
  TextLoop, Title, 
  HeroLeftContainer, HeroRightContainer,HeroInnerContainer,
  Container, SkillsContainer, Skill, SkillTitle, 
  SkillList, SkillItem, SkillImage
};