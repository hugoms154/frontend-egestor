import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin-top: 64px;
    font-weight: 500;
    font-size: 18px;
    line-height: 54px;
    color: #969cb2;
    text-align: center;
  }

  .loading {
    animation: ${loadingAnimation} 1s infinite linear;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -150px;

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 22px 32px;
  border-radius: 5px;

  & + div {
    margin-top: 16px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
      margin-right: 16px;
      color: #969cb2;
    }
    svg {
      flex-shrink: 0;
    }
  }
  strong {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
    color: #363f5f;
  }

  @media (min-width: 750px) {
    & + div {
      margin-top: 0;
    }
  }
`;
