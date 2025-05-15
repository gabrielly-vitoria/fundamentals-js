// Importa o que precisa para personalizar o documento HTML que o Next.js gera
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

// Importa a ferramenta para coletar os estilos do styled-components e colocar no HTML do servidor
import { ServerStyleSheet } from 'styled-components'

// Essa classe é para personalizar o documento HTML que o Next.js cria, pra funcionar melhor com styled-components
export default class MyDocument extends Document {
  // Método que roda no servidor para pegar os estilos e passar para a página
  static async getInitialProps(ctx: DocumentContext) {
    // Cria a folha de estilos do styled-components
    const sheet = new ServerStyleSheet()
    // Guarda o jeito que o Next renderiza a página
    const originalRenderPage = ctx.renderPage

    try {
      // Modifica a forma que o Next renderiza para coletar os estilos do styled-components
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      // Pega os dados iniciais do documento
      const initialProps = await Document.getInitialProps(ctx)
      
      // Retorna os dados e os estilos para o Next usar
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}       {/* Estilos padrões */}
            {sheet.getStyleElement()}   {/* Estilos do styled-components */}
          </>
        ),
      }
    } finally {
      // Fecha a folha de estilos para não vazar memória
      sheet.seal()
    }
  }

  // Método que monta o HTML que vai para o navegador
  render() {
    return (
      <Html lang="pt-BR">  {/* Define a linguagem da página */}
        <Head />          {/* Aqui fica o conteúdo do <head> da página */}
        <body>
          <Main />       {/* Onde o conteúdo da página aparece */}
          <NextScript />  {/* Scripts necessários do Next.js */}
        </body>
      </Html>
    )
  }
}
