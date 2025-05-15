// Aqui a gente importa o styled-components, que é uma biblioteca para criar estilos direto no React
import styled from 'styled-components'

// Criamos o estilo do nosso botão, que é basicamente um botão HTML com estilos CSS
export const ButtonStyled = styled.button`
  padding: 10px 20px;  // Espaço dentro do botão (em cima/baixo 10px, esquerda/direita 20px)
  border: none;        // Tiramos a borda padrão do botão
  background-color: #7159c1; // Cor roxa de fundo
  color: white;        // Cor branca para o texto
  border-radius: 8px;  // Bordas arredondadas, para ficar mais bonito
  cursor: pointer;     // Quando passar o mouse, o cursor muda pra mostrar que dá pra clicar
`
