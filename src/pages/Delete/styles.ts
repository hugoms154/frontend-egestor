import styled, { css } from 'styled-components';

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

    fieldset {
      display: flex;
      flex-direction: column;
      border: 0;

      input {
        width: 100%;
        height: 45px;
        border: 0px;
        padding: 0 20px;
        text-align: center;

        height: 56px;
        padding: 0 10px;
        border-bottom: 2.5px solid transparent;
        &:focus-within {
          border-bottom: 2.5px solid #10bb77;
        }
      }

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
  }
`;

interface IError {
  show: boolean;
}

export const Error = styled.div<IError>`
  ${props =>
    props.show
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #e83f5b;
  svg {
    margin-right: 8px;
  }
`;

interface IConfirm {
  show: boolean;
}

export const Confirm = styled.div<IConfirm>`
  ${props =>
    props.show
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmBox = styled.div`
  background: #fff;
  margin: 1%;
  margin-bottom: 20%;

  padding: 40px 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 8px;
      color: #e83f5b;
    }
  }

  p {
    margin-top: 8px;
    display: flex;
    > span {
      display: flex;
      align-items: center;
      margin-left: 8px;
      .blocked,
      .active,
      .inactive {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        font-weight: 700;
        margin-right: 8px;
      }

      .blocked {
        background: #e83f5b;
      }

      .active {
        background: #12a454;
      }

      .inactive {
        background: #1b5299;
      }
    }
  }

  span {
    display: flex;
    flex-direction: column;
    button {
      border: 0;
      padding: 16px 32px;
      border-radius: 5px;
      margin: 32px 16px 0;

      color: #fff;
      background: #10bb77;

      &:hover {
        background: rgba(16, 187, 119, 0.8);
      }
    }
    button:last-child {
      background: #e83f5b;
    }
  }

  @media (min-width: 750px) {
    margin-top: 10%;
    max-width: 750px;

    span {
      flex-direction: row;
    }
  }
`;
