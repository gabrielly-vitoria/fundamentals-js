// Aqui a gente define um tipo para as informações que o botão vai receber, para deixar tudo organizado e seguro
export interface ButtonProps {
  label: string          // O texto que vai aparecer no botão é obrigatório e tem que ser uma string (texto)
  onClick?: () => void   // O que vai acontecer quando clicar é opcional (por isso tem o "?"), e é uma função que não recebe nada e não retorna nada
}
