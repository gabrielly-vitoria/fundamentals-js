// Importa o hook para navegação de página do Next.js
import { useRouter } from 'next/router'

// Importa o styled-components para criar estilos dentro do arquivo
import styled from 'styled-components'

// Importa o botão que a gente criou
import { Button } from '../components/Button'

// Aqui a gente cria o estilo para o container da página, com padding, largura máxima e centralizado
const Container = styled.main`
  padding: 40px;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`

// Estilo para o título principal, com tamanho de fonte e cor roxa
const Title = styled.h1`
  font-size: 2.5rem;
  color: #7159c1;
`

// Estilo para o parágrafo de descrição, com margem e cor cinza escuro
const Description = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #444;
`

// Componente principal da página Home
export default function Home() {
  // Criamos o "router" para conseguir mudar de página quando clicar no botão
  const router = useRouter()


  return (
    <Container>
      {/* Título da página */}
      <Title>Bem-vindo(a)! 💜</Title>
      {/* Descrição do que o projeto faz e o que foi aprendido */}
      <Description>
        Gostaria de falar um pouco sobre oque eu aprendi com este projeto, aprendi o básico de TypeScript com React:
        tipagem de props, uso de useState e useEffect com tipagem,
        consumo de API, organização de pastas e styled-components com TS.
      </Description>
      <div style={{ marginTop: 40 }}>
        <Button label="Ver Pokémons" onClick={() => router.push('/products')} />
      </div>
    </Container>
  )
}
