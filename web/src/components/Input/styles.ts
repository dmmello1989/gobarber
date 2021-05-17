import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;

  & + & {
    margin-top: 8px;
  }

  ${(props) => props.isError && css`
    border-color: #c53030;
    
    >svg {
      color: #c53030;
    }
  `};

  ${(props) => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `};

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `};


  > input {
    flex: 1;
    color: #f4ede8;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  max-height: 20px;
  margin-left: 16px;

  > span {
    color: #ffffff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  > svg {
    margin: 0;
  }
`;
