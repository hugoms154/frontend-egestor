import styled from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  input {
    width: 100%;

    padding-right: 20px;
    background: transparent;
    border: none;
    height: 54px;
    color: #747474;
    font-weight: 400;
  }
`;

export const Error = styled(Tooltip)`
  position: absolute;
  right: 10px;
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
