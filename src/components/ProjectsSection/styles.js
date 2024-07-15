import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content-center;
    position: relative;
    z-index: 1;
    padding: 0 16px;
    align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 4vh;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  flex-wrap: wrap;
`;
export{
    Container, Wrapper, Title, CardContainer
}