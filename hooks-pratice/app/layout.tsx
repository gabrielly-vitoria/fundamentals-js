// importei três componentes diferentes que eu mesma criei
import Contador from './page' // esse componente está sendo usado como children (conteúdo da página principal)
import Temporizador from './temporizador/page'
import Input from './input/page'

// esse objeto metadata é usado pra colocar o título e a descrição da página
// essas informações aparecem no navegador e ajudam com SEO também
// SEO = Search Engine Optimization(Otimização de mecanismos de busca), como o nome já diz ele serve para otimizar um site ou página para que ele apareça nas primeiras posições dos resultados dos motores de busca(Como o google, Bing, e etc)
export const metadata = { 
  title: 'Estudos React',
  description: 'useState, useEffect, useRef',
}

// exportei de forma padrão uma função chamada RootLayout
// esse layout vai ser a base visual do projeto — tudo que eu colocar aqui aparece no navegador
// RootLayout = é o nome da função que define que esse vai ser o layout principal do site, ele vai ser usado automaticamente pelo Next.js para envolver todas as páginas do site 
// o parâmetro children é como um espaço reservado para mostar o conteudo da pagina principal, que vai ser definida pela forma como estão organizadas as pastas do projeto 
// { children: React.ReactNode } é do TypeScript, e serve pra dizer que esse children pode ser qualquer coisa que o React consegue mostrar na tela
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR"> {/* define o idioma da página como português do Brasil */}
      <body>
        {/* Temporizador(feito com useEffect e useState) */}
        <div>
          <Temporizador />
        </div>

        {/* Input que pode ser focado e limpo com um clique (feito com useRef) */}
        <div>
          <Input />
        </div>

        {/* Aqui aparece o conteúdo da página atual */}
        {/* No caso, o componente Contador que está no page.tsx na pasta principal */}
        {children}
      </body>
    </html>
  )
}
