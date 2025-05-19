'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Button from '@/src/components/Button/index';
// O import abaixo não é necessário porque os estilos estão no arquivo styles.tsx do botão
// import styles from '@/src/features/Auth/components/LoginForm'

import {
  loginUser,
  getUserList,
  createUser,
  updateUserPut,
  updateUserPatch,
} from '../../services/auth-api';

export default function LoginForm() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [result, setResult] = useState<string>('');

  // Função de login (POST) - autentica usuário com email e senha
  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  // Função GET - busca lista de usuários
  const handleGet = async () => {
    try {
      const res = await getUserList();
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  // Função POST - cria novo usuário com nome e trabalho
  const handlePost = async () => {
    try {
      const res = await createUser('GB', 'Dev');
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  // Função PUT - atualiza usuário inteiro (id 2) com nome e trabalho
  const handlePut = async () => {
    try {
      const res = await updateUserPut('2', 'GB', 'Senior Dev');
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  // Função PATCH - atualiza parcialmente usuário (id 2) com novo nome
  const handlePatch = async () => {
    try {
      const res = await updateUserPatch('2', 'GB Atualizada');
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  return (
    <Container>
      <h2>Login</h2>

      {/* Input do e-mail */}
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Input da senha */}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Botões para testar os métodos da API */}
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleGet}>GET</Button>
      <Button onClick={handlePost}>POST</Button>
      <Button onClick={handlePut}>PUT</Button>
      <Button onClick={handlePatch}>PATCH</Button>

      {/* Área onde será exibido o resultado da API */}
      <Result>{result}</Result>
    </Container>
  );
}

// Container principal do formulário, centralizado e com sombra leve
const Container = styled.div`
  max-width: 400px;                /* largura máxima do container */
  margin: 100px auto;              /* centraliza horizontalmente e distancia do topo */
  padding: 2rem;                   /* espaçamento interno */
  border-radius: 8px;              /* cantos arredondados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* sombra leve para destaque */
`;

// Estilo para os inputs de email e senha
const Input = styled.input`
  width: 100%;                    /* ocupa toda a largura do container */
  padding: 0.8rem;                /* espaçamento interno */
  margin-bottom: 1rem;            /* espaçamento abaixo do input */
  border: 1px solid #ccc;         /* borda cinza clara */
  border-radius: 4px;             /* cantos arredondados */
`;

// Área para exibir resultado JSON formatado da API
const Result = styled.pre`
  background: #eee;               /* fundo cinza claro */
  padding: 1rem;                  /* espaçamento interno */
  border-radius: 4px;             /* cantos arredondados */
  white-space: pre-wrap;          /* quebra automática de linha para textos longos */
`;
