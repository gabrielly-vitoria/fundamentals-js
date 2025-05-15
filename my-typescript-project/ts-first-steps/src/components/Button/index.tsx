// Aqui a gente está importando o estilo do botão que foi criado no arquivo "styles.ts"
import { ButtonStyled } from './styles'

// Aqui a gente tá importando o tipo das informações (props) que o botão vai receber
import { ButtonProps } from './types'

// Essa é a função que representa o nosso botão
// A gente recebe duas coisas nela: o texto que vai aparecer no botão (label)
// e o que vai acontecer quando a pessoa clicar nele (onClick)
export const Button = ({ label, onClick }: ButtonProps) => {
  // Aqui a gente tá retornando o botão estilizado, com o texto e o clique funcionando
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
}
