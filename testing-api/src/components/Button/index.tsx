'use client';

// Imports

// Importando o ReactNode da biblioteca react
// ReactNode =
import { ReactNode } from 'react';
// Importando o StyleButton do styles
import { StyledButton } from './styles';


// Define os tipos das propriedades (props) que o componente Button vai receber
interface ButtonProps {
  children: ReactNode;          // Conteúdo que ficará dentro do botão (texto, ícone, etc)
  onClick?: () => void;         // Função que será chamada quando o botão for clicado (opcional)
  type?: 'button' | 'submit';   // Tipo do botão: "button" (padrão) ou "submit" (para enviar formulários)
}

// Componente Button que recebe as props definidas na interface ButtonProps
export default function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    // Retorna o botão estilizado, passando as props onClick e type para o StyledButton
    <StyledButton onClick={onClick} type={type}>
      {children} {/* Exibe o conteúdo dentro do botão */}
    </StyledButton>
  );
}
