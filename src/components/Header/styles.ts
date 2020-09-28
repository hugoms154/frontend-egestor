import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
  showNav: boolean;
}

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div<ContainerProps>`
  background: #10bb77;
  padding: 30px 0;

  header {
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      background: transparent;

      svg {
        color: #fff;
      }
    }

    @media (max-width: 1120px) {
      nav {
        z-index: 9999;
        position: fixed;
        background: #fff;
        top: 0;
        left: 0;
        width: 60%;
        height: 100vh;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
        transition: transform 0.5s ease-in;

        ${props =>
          props.showNav
            ? css`
                transform: translateX(0);
                animation: ${appear} 0.5s;
              `
            : css`
                transform: translateX(-105%);
                animation: ${disappear} 0.5s;
              `}
      }
    }

    @media (min-width: 1121px) {
      button {
        display: none;
      }

      nav {
        display: flex;
        align-items: center;
      }
    }
  }
`;

interface IMenuOptionProps {
  to: string;
  url: string;
}

export const MenuOption = styled(Link)<IMenuOptionProps>`
  @media (max-width: 1120px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #363f5f;
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.2s;
    padding: 20px;
    border-bottom: 2px solid #f0f2f5;

    &:hover {
      opacity: 0.6;
    }

    svg {
      color: #1edf92;
    }

    ${props =>
      props.to === props.url &&
      css`
        background: #1edf92;
        color: #fff;

        svg {
          color: #fff;
        }
      `}
  }

  @media (min-width: 1120px) {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.2s;
    padding: 0 0 6px 0;

    ${props =>
      props.to === props.url &&
      css`
        border-bottom: 2px solid #fff;
      `}

    &:hover {
      opacity: 0.6;
    }

    & + a {
      margin-left: 32px;
    }

    svg {
      display: none;
    }
  }
`;
