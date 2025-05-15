// Aqui a gente importa algumas coisas do React que ajudam a trabalhar com estados e efeitos
import { useEffect, useState } from 'react'

// Importa o tipo Product para usar no estado
import { Product } from '../types'

// Importa a função que pega os produtos da API
import { fetchProducts } from '../services/productsService'

// Aqui a gente cria um "hook" que vai trazer os produtos e controlar se está carregando ou não
export const useProducts = () => {
  // Estado para guardar os produtos, começa como uma lista vazia
  const [products, setProducts] = useState<Product[]>([])

  // Estado para controlar se está carregando, começa como "true" porque vai começar a carregar
  const [loading, setLoading] = useState(true)

  // useEffect roda uma vez quando o componente é montado, para pegar os dados da API
  useEffect(() => {
    // Chama a função que busca os produtos
    fetchProducts().then(data => {
      setProducts(data)  // Guarda os produtos que vieram da API no estado
      setLoading(false)  // Diz que não está mais carregando porque os produtos já chegaram
    })
  }, []) // O [] vazio significa que isso só roda uma vez quando o componente carrega

  // Retorna os produtos e se está carregando, para quem usar esse hook conseguir acessar
  return { products, loading }
}
