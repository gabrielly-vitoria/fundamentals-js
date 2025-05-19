// login-api-test/src/features/auth/services/auth-api.ts

// Importa a instância do axios configurada
import api from '@/src/services/axios';

// Apenas para debug: mostra a URL base no console
console.log('🔗 Base URL da API:', api.defaults.baseURL); // <- útil

// Função que faz o login com email e senha (POST)
export async function loginUser(email: string, password: string) {
  const response = await api.post('/login', { email, password }); // Envia os dados para a rota /login
  return response.data; // Retorna somente os dados da resposta
}

// Função que busca a lista de usuários (GET)
export async function getUserList() {
  const response = await api.get('/users?page=2'); // Faz requisição GET na rota de usuários
  return response.data;
}

// Função que cria um novo usuário (POST)
export async function createUser(name: string, job: string) {
  const response = await api.post('/users', { name, job }); // Envia nome e cargo do usuário
  return response.data;
}

// Função que atualiza completamente um usuário (PUT)
export async function updateUserPut(id: string, name: string, job: string) {
  const response = await api.put(`/users/${id}`, { name, job }); // Atualiza os dados do usuário pelo ID
  return response.data;
}

// Função que atualiza parcialmente um usuário (PATCH)
export async function updateUserPatch(id: string, name: string) {
  const response = await api.patch(`/users/${id}`, { name }); // Atualiza apenas o nome do usuário
  return response.data;
}
