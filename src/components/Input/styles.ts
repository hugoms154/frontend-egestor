import styled from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 700px;
  height: 56px;
  padding: 0 10px;
  border-left: 2.5px solid #f0f2f5;
  &:focus-within {
    border-left: 2.5px solid #10bb77;
  }

  & + div {
    margin-top: 10px;
  }

  input {
    width: 100%;
    padding-right: 30px;
    background: transparent;
    border: 0;

    &::placeholder {
    }
  }

  input:last-child {
    padding: 0;
    color: #747474;
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
