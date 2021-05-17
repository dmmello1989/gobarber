import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';

import BgImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const Logo = styled.img`
  
`;

export const UnformForm = styled(Form)`
  margin: 80px 0;
  width: 340px;
  text-align: center;
`;

export const FormTitle = styled.h1`
  margin-bottom: 24px;
`;

export const Link = styled.a`
  display: block;
  margin-top: 24px;
  color: #f4ede8;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const BackLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 24px;
  color: #f4ede8;
  text-decoration: none;
  transition: color 0.3s;

  > svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BgImg}) center no-repeat;
  background-size: cover;
`;
