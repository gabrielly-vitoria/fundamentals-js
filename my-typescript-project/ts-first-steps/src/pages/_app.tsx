// Importa o tipo AppProps do Next.js, que é o tipo das propriedades que a aplicação recebe
import type { AppProps } from 'next/app'

// Importa o ThemeProvider para aplicar temas no styled-components
import { ThemeProvider } from 'styled-components'

// Importa o estilo global, para deixar o site com aparência padrão
import { GlobalStyle } from '@/src/styles/global'

// Importa o tema que a gente criou, com cores e etc
import { theme } from '@/src/styles/theme'

// Essa função é o ponto de entrada da aplicação Next.js
// Ela serve para aplicar configurações globais e envolver as páginas com temas
export default function App({ Component, pageProps }: AppProps) {
  return (
    // Aqui a gente passa o tema para todos os componentes dentro do ThemeProvider
    <ThemeProvider theme={theme}>
      {/* Aqui a gente adiciona o estilo global para o site todo */}
      <GlobalStyle />
      
      {/* Aqui é a página atual que vai aparecer (ex: Home, Products, etc) */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
