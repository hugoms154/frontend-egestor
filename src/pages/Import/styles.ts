import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1280px;
  margin: 40px auto;
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 768px;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  width: 100%;
  max-width: 768px;
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;

  @media (max-width: 550px) {
    padding: 16px;
  }
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;
    svg {
      margin-right: 5px;
    }
  }
  button {
    background: #10bb77;
    width: 190px;
    color: #fff;
    border-radius: 5px;
    padding: 15px 8px;
    border: 0;
    transition: background-color 0.2s;
    &:hover {
      background: rgba(16, 187, 119, 0.8);
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;

    button {
      width: 100%;
      margin-top: 16px;
    }
  }
`;
