import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';
import * as S from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O campo "nome" é obrigatório.'),
        email: Yup.string().required('O campo "email" é obrigatório.').email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <S.Container>
      <S.Background />

      <S.Content>
        <S.Logo src={logoImg} alt="GoBarber" />
        <S.UnformForm ref={formRef} onSubmit={handleSubmit}>
          <S.FormTitle>Faça seu cadastro</S.FormTitle>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
          <Button type="submit">Cadatrar</Button>
        </S.UnformForm>
        <S.BackLink href="login">
          <FiArrowLeft />
          Voltar para logon
        </S.BackLink>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
