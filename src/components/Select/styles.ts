import styled from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
}
export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  select {
    flex: 1;
    background: transparent;
    border: none;
    height: 54px;
  }
`;

export const Error = styled(Tooltip)`
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
