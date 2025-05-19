// components/button/styles.tsx

// importei o styled do styled-components para criar estilos dentro do JS
import styled from 'styled-components';

// criei o StyledButton, que é um botão estilizado com estilos CSS dentro de um template string
export const StyledButton = styled.button`
  width: 100%;              // botão vai ocupar 100% da largura do pai
  padding: 0.8rem;          // espaçamento interno do botão, em cima/baixo e esquerda/direita
  background-color: #7f3fbf; // cor de fundo roxa do botão
  color: white;             // cor do texto branca
  border: none;             // tira a borda padrão do botão
  border-radius: 4px;       // cantos arredondados do botão, com raio de 4 pixels
  margin-bottom: 1rem;      // distância para baixo, para separar de outros elementos
  cursor: pointer;          // muda o cursor para a mãozinha quando passa por cima
  transition: background-color 0.3s, transform 0.1s ease; // animação suave para mudar cor e tamanho

  &:hover {                 // quando passar o mouse em cima (hover)
    background-color: #6a2e9c; // muda para um roxo mais escuro
  }

  &:active {                // quando clicar e segurar o botão (ativo)
    transform: scale(0.95); // botão fica um pouco menor (95% do tamanho)
    background-color: #4b1b72; // cor roxa ainda mais escura para mostrar que está clicado
  }
`;

// O & representa o próprio elemento que você está estilizando, então ao invés de repetir o nome do componente ou seletor, você usa o & para indicar “aqui é ele mesmo”.
