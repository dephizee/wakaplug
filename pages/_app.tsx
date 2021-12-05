import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const getPageLayout = Component.getPageLayout || ((page:ReactElement) => page)
  return getPageLayout(<Component {...pageProps} />)
}

export default MyApp
