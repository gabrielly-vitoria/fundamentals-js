// Aqui estou importando dois hooks do React:
// useEffect → serve para rodar um código automaticamente quando o componente carrega
// useState → serve para armazenar valores que podem mudar com o tempo (como os pokémons)
import { useEffect, useState } from 'react'

// Aqui importo a instância da API que configurei em outro arquivo
// É com ela que vou fazer a requisição dos pokémons
import { api } from '../services/api'

// Importo o componente de botão que criei, para usar na página
import { Button } from '../components/Button'

// Aqui defino o formato que cada Pokémon vai ter com uma interface do TypeScript
// Uma interface é como um modelo de caixa que define o que deve existir dentro de um objeto
interface Pokemon {
  name: string   // nome do pokémon (string = texto)
  url: string    // url da API que tem mais dados do pokémon
  id: number     // id do pokémon (número)
  image: string  // url da imagem do pokémon
}

// Aqui começa o componente principal da página
export default function Products() {
  // Crio um estado para armazenar os pokémons (começa com uma lista vazia)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  // Crio um estado para controlar se está carregando (começa como true)
  const [loading, setLoading] = useState(true)

  // Crio um estado para armazenar erro, se acontecer (começa como null)
  const [error, setError] = useState<string | null>(null)

  // useEffect → roda quando a página carrega
  useEffect(() => {
    // Crio uma função assíncrona para buscar os pokémons da API
    async function fetchPokemons() {
      try {
        // Aqui faço a requisição GET para pegar 20 pokémons
        const response = await api.get('/pokemon?limit=20')

        // results → é a lista com nome e url de cada pokémon
        const results = response.data.results

        // Aqui transformo os dados para deixar no formato que eu quero (com id e imagem)
        const pokemonsData = results.map((p: { name: string; url: string }) => {
          // Extraio o id a partir da URL do pokémon (ex: "https://pokeapi.co/api/v2/pokemon/1/")
          const id = p.url.split('/').filter(Boolean).pop()

          // Retorno um novo objeto no formato da minha interface
          return {
            name: p.name,
            url: p.url,
            id: Number(id), // converto id para número
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`, // link direto da imagem
          }
        })

        // Atualizo o estado com os pokémons prontos
        setPokemons(pokemonsData)

      } catch {
        // Se der erro, atualizo o estado de erro
        setError('Erro ao carregar Pokémons.')
      } finally {
        // Quando acabar (com ou sem erro), deixo de carregar
        setLoading(false)
      }
    }

    // Aqui eu chamo a função para buscar os pokémons
    fetchPokemons()
  }, []) // [] significa que isso só vai rodar uma vez, quando o componente carregar

  // Se ainda estiver carregando, mostro o texto de carregamento
  if (loading) return <p style={{ padding: 20 }}>Carregando Pokémons...</p>

  // Se tiver erro, mostro a mensagem de erro
  if (error) return <p style={{ padding: 20, color: 'red' }}>{error}</p>

  // Se estiver tudo certo, retorno o conteúdo da página
  return (
    <main style={{ padding: 20 }}>
      {/* Título da página */}
      <h1>Pokémons</h1>

      {/* Botão para voltar para a tela inicial (volta uma página no histórico) */}
      <Button label="Voltar" onClick={() => window.history.back()} />

      {/* Lista de pokémons */}
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {/* Faço um loop com map e mostro cada pokémon */}
        {pokemons.map((p) => (
          <li
            key={p.id} // sempre usar uma chave única no map
            style={{
              marginBottom: 15,
              borderBottom: '1px solid #ccc',
              paddingBottom: 15,
              display: 'flex',
              alignItems: 'center',
              gap: 15,
            }}
          >
            {/* Mostro a imagem do pokémon */}
            <img src={p.image} alt={p.name} width={80} height={80} />

            {/* Mostro o nome do pokémon com a primeira letra maiúscula */}
            <h3 style={{ textTransform: 'capitalize' }}>{p.name}</h3>
          </li>
        ))}
      </ul>
    </main>
  )
}
