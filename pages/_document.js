import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('../public/background.png')] bg-cover bg-fixed bg-center h-[200vh]" >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
