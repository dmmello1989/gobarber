import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  color: #312e38;
  font-weight: 500;
  border: 0;
  border-radius: 10px;
  background-color: #ff9000;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
