import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: -65px auto 0;
  padding: 40px 20px;

  form {
    width: 100%;

    button {
      width: 100%;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
      border: 0;
      background: #1edf92;
      padding: 20px 32px;
      transition: background-color 0.3s;

      &:hover {
        background: #1ac984;
      }
    }
    .select,
    .searchInput {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 1120px) {
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      .select,
      .searchInput {
        max-width: 300px;
        margin: 0;
        margin-right: 16px;
      }

      button {
        height: 54px;
        max-width: 300px;
        padding: 0 10px;
      }
    }
  }
`;
