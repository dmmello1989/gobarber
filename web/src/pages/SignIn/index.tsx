import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import * as S from './styles';

const SignIn: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.Logo src={logoImg} alt="GoBarber" />
      <S.Form>
        <S.FormTitle>Faça seu logon</S.FormTitle>
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">Entrar</Button>
        <S.Link href="forgot">Esqueci minha senha</S.Link>
      </S.Form>
      <S.CreateLink href="login">
        <FiLogIn />
        Criar conta
      </S.CreateLink>
    </S.Content>
    <S.Background />
  </S.Container>
);

export default SignIn;
