import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <body>
        <Script
          src="p5.min.js"
          strategy="afterInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
