// Importa o tipo Product que é a definição do que é um produto
import { Product } from '../types'

// Aqui a gente define que o componente ProductCard vai receber uma informação chamada "product" do tipo Product
interface Props {
  product: Product
}

// Essa função é o nosso cartão de produto que mostra título e preço
export const ProductCard = ({ product }: Props) => {
  return (
    <div>
      {/* Mostra o título do produto */}
      <h3>{product.title}</h3>
      
      {/* Mostra o preço do produto */}
      <p>R$ {product.price}</p>
    </div>
  )
}
