// login-api-test/app/layout.tsx
+
// aqui estou definindo que essa página é visivel para o cliente 
'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/src/styles/global';
import { theme } from '@/src/styles/theme';

// Importando o componente do botão
import { ButtonComponent } from '@/src/components/Button/index'; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* Renderizando o botão onde você quiser no layout */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
