// Importa o tipo Product para dizer o que essa função vai devolver
import { Product } from '../types'

// Essa função busca os produtos na API e retorna uma lista de produtos
export const fetchProducts = async (): Promise<Product[]> => {
  // Faz a requisição para o endereço da API, pegando só 5 produtos
  const response = await fetch('https://fakestoreapi.com/products?limit=5')

  // Transforma a resposta em JSON, que é o formato que dá pra usar no JavaScript
  const data = await response.json()

  // Retorna os dados, que são os produtos
  return data
}
