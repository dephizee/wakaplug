import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  const getPageLayout = Component.getPageLayout || ((page:ReactElement) => page)
  return  <Provider store={store}>
              {getPageLayout(<Component {...pageProps} />)}
          </Provider>
}

export default MyApp
