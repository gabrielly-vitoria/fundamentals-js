// login-api-test/src/styles/global.ts

// Importa função para criar estilos globais
import { createGlobalStyle } from 'styled-components';

// Define os estilos globais para todo o app
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;                 // Remove as margens padrão dos elementos
    padding: 0;                // Remove os espaçamentos padrão
    box-sizing: border-box;   // Faz com que a largura e altura incluam padding e borda
    font-family: 'Segoe UI', sans-serif; // Define uma fonte padrão
  }

  body {
    background-color: #f5f0f8; // Cor de fundo da página
    color: #333;               // Cor padrão dos textos
  }
`;
