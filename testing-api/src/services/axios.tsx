// login-api-test/src/services/axios.ts

// Importa o axios
import axios from 'axios';

// Cria uma instância do axios já configurada
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://reqres.in/api', // Define a URL base da API
  headers: {
    'Content-Type': 'application/json', // Diz que o conteúdo das requisições será em JSON
    'x-api-key': 'reqres-free-v1' // ✅ Sua chave aqui
  },
});

// Exporta a instância configurada para ser usada em outros arquivos
export default api;
