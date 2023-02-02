import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name='description' content='Desarrollado por Martín Morici' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className="bg-[url('../public/background.png')] bg-cover bg-fixed bg-center" >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
