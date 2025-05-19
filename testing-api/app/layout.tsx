// Essa linha informa ao Next.js que esse componente deve ser renderizado no lado do cliente (navegador)
'use client';

// Imports//

// Importa o tipo ReactNode, que faz com que qualquer conteúdo possa ser exibido no React (como textos, elementos, etc)
import { ReactNode } from 'react';

// Importei o ThemeProvider da biblioteca styled-components, que permite aplicar temas (cores, tamanhos, etc) em todos os componentes
import { ThemeProvider } from 'styled-components';

// Importa os estilos globais do projeto.
import { GlobalStyle } from '@/src/styles/global';

// Importa o objeto com as configurações do tema (como cores e fontes personalizadas)
import { theme } from '@/src/styles/theme';

// Importa o componente botão.
import Button  from '@/src/components/Button/index'; 

// Cria a função RootLayout de forma padrão e a exporta, que recebe o conteúdo da page como children
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Aplica o tema em todos os componentes */}
        <ThemeProvider theme={theme}>
          {/* Aplica os estilos globais do projeto */}
          <GlobalStyle />

          {/* Renderiza o conteúdo do page) */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
