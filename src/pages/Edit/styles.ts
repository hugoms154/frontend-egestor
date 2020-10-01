import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #363f5f;
    text-align: center;
  }

  form {
    background: #fff;
    text-align: center;
    margin-top: 40px;
    border-radius: 5px;
    padding: 32px 64px;

    button {
      width: 100%;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
      border: 0;
      background: #10bb77;
      margin-top: 16px;
      padding: 20px 32px;
      transition: background-color 0.3s;

      &:hover {
        background: rgba(16, 187, 119, 0.8);
      }
    }
  }
`;
