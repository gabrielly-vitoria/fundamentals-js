//login-api-test/src/features/auth/services/auth-api.ts

import api from '@/src/services/axios';

console.log('🔗 Base URL da API:', api.defaults.baseURL); // <- útil

export async function loginUser(email: string, password: string) {
  const response = await api.post('/login', { email, password });
  return response.data;
}

export async function getUserList() {
  const response = await api.get('/users?page=2');
  return response.data;
}

export async function createUser(name: string, job: string) {
  const response = await api.post('/users', { name, job });
  return response.data;
}

export async function updateUserPut(id: string, name: string, job: string) {
  const response = await api.put(`/users/${id}`, { name, job });
  return response.data;
}

export async function updateUserPatch(id: string, name: string) {
  const response = await api.patch(`/users/${id}`, { name });
  return response.data;
}
