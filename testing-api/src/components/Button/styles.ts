// styles.tsx
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #7f3fbf; /* Cor de fundo roxa */
  border: none; /* Sem borda */
  color: white; /* Cor do texto */
  padding: 15px 32px; /* Espaçamento interno */
  text-align: center; /* Alinhar texto */
  text-decoration: none; /* Sem sublinhado */
  display: inline-block; /* Exibe como bloco em linha */
  font-size: 16px; /* Tamanho da fonte */
  margin: 4px 2px; /* Espaçamento externo */
  cursor: pointer; /* Cursor de mão */
  border-radius: 30px; /* Cantos arredondados */
  transition: background-color 0.3s, transform 0.1s ease; /* Transições suaves */

  &:hover {
    background-color: #6a2e9c; /* Cor de fundo ao passar o mouse */
  }

  &:active {
    transform: scale(0.95); /* Animação de pressionamento (botão fica menor) */
    background-color: #4b1b72; /* Cor de fundo ao clicar */
  }
`;
