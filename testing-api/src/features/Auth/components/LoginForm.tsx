// login-api-test/src/features/auth/components/LoginForm.tsx
'use client';

import { useState } from 'react';
import styled from 'styled-components';
import {
  loginUser,
  getUserList,
  createUser,
  updateUserPut,
  updateUserPatch,
} from '../services/auth-api';

// Container para o formulário
const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #7f3fbf;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s ease;

  &:hover {
    background-color: #6a2e9c;
  }

  &:active {
    transform: scale(0.95);
    background-color: #4b1b72;
  }
`;

const Result = styled.pre`
  background: #eee;
  padding: 1rem;
  border-radius: 4px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState('eve.holt@reqres.in'); // Valor válido
  const [password, setPassword] = useState('cityslicka'); // Valor válido
  const [result, setResult] = useState<string>('');

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  const handleGet = async () => {
    try {
      const res = await getUserList();
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  const handlePost = async () => {
    try {
      const res = await createUser('GB', 'Dev');
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

  const handlePut = async () => {
    try {
      const res = await updateUserPut('2', 'GB', 'Senior Dev');
      setResult(JSON.stringify(res, null, 2));
    } catch (err: any) {
      console.error(err);
      setResult(JSON.stringify(err.response?.data || err.message, null, 2));
    }
  };

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
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleGet}>GET</Button>
      <Button onClick={handlePost}>POST</Button>
      <Button onClick={handlePut}>PUT</Button>
      <Button onClick={handlePatch}>PATCH</Button>
      <Result>{result}</Result>
    </Container>
  );
}
