import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #10bb77;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);

    left: 50%;
    transform: translateX(-50%);

    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #10bb77 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      position: absolute;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
